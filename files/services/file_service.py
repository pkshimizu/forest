import os

from django.core.exceptions import ObjectDoesNotExist

from files.domains.file import File
from files.models import Path

import logging


class FileService:
    def list(self):
        return [File(record['path']) for record in Path.objects.filter(parent_uuid=None).values('path')]

    def get(self, uuid):
        try:
            target = Path.objects.get(uuid=uuid)
            return File(target.path,
                        [File(child['path']) for child in Path.objects.filter(parent_uuid=uuid).values('path')])
        except ObjectDoesNotExist:
            return None

    @staticmethod
    def _save_paths(files):
        for file in files:
            Path.objects.update_or_create(
                uuid=file.uuid,
                path=file.path,
            )

    def analyze(self, file):
        logging.info('target dir', file.path)
        print("target dir: " + file.path)
        file_children = {child.uuid: child for child in file.children}
        path_children = [path.uuid for path in Path.objects.filter(parent_uuid=file.uuid)]

        add_paths = []
        delete_uuids = []

        if not Path.objects.filter(uuid=file.uuid).exists():
            add_paths.append(Path(uuid=file.uuid, path=file.path, parent_uuid=None))

        for file_child in file_children.values():
            if file_child not in path_children:
                add_paths.append(Path(uuid=file_child.uuid, path=file_child.path, parent_uuid=file.uuid))

        for path_child in path_children:
            if path_child not in file_children:
                delete_uuids.append(path_child)

        Path.objects.bulk_create(add_paths)
        Path.objects.filter(uuid__in=delete_uuids).delete()

        for file_child in file_children.values():
            self.analyze(file_child)
