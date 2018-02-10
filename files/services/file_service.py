import os

from django.core.exceptions import ObjectDoesNotExist

from files.domains.file import File
from files.models import Path

import logging


class FileService:
    def list(self, use_cache=False):
        if use_cache:
            return [File(record.path) for record in Path.objects.filter(parent_uuid=None)]
        files = File('/').children
        self._update_paths(None, files)
        return files

    def get(self, uuid, use_cache=False):
        try:
            target = Path.objects.get(uuid=uuid)
            if use_cache:
                return File(target.path, [File(child.path) for child in Path.objects.filter(parent_uuid=uuid)])
            file = File(target.path)
            self._update_paths(file.uuid, file.children)
            return file
        except ObjectDoesNotExist:
            return None

    def _update_paths(self, parent_uuid, files):
        file_children = {child.uuid: child for child in files}
        path_children = [path.uuid for path in Path.objects.filter(parent_uuid=parent_uuid)]

        add_paths = []
        delete_uuids = []

        for file_child in file_children.values():
            if file_child.uuid not in path_children:
                add_paths.append(Path(uuid=file_child.uuid, path=file_child.path, parent_uuid=parent_uuid))

        for path_child in path_children:
            if path_child not in file_children:
                delete_uuids.append(path_child)

        Path.objects.bulk_create(add_paths)
        Path.objects.filter(uuid__in=delete_uuids).delete()
