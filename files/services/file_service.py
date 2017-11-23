import os

from django.core.exceptions import ObjectDoesNotExist

from files.domains.file import File
from files.models import Path


class FileService:
    def list(self):
        files = File.roots()
        self._save_paths(files)
        return files

    def get(self, uuid):
        try:
            path = Path.objects.get(uuid=uuid).path
            file = File(path)
            self._save_paths(file.children)
            return file
        except ObjectDoesNotExist:
            return None

    def _save_paths(self, files):
        for file in files:
            Path.objects.update_or_create(
                uuid=file.uuid,
                path=file.path,
            )

    def analyze(self, file):
        file_children = {child.uuid: child for child in file.children()}
        path_children = [path.uuid for path in Path.objects.filter(parent_uuid=file.uuid)]

        add_paths = []
        delete_uuids = []

        if not Path.objects.filter(uuid=file.uuid).exists():
            add_paths.append(Path(uuid=file.uuid, path=file.path, parent_uuid=None))

        for file_child in file_children.keys():
            if file_child not in path_children:
                add_paths.append(Path(uuid=file_child.uuid, path=file_child.path, parent_uuid=file.uuid))

        for path_child in path_children:
            if path_child not in file_children:
                delete_uuids.append(path_child)

        Path.objects.bulk_create(add_paths)
        Path.objects.filter(uuid__in=delete_uuids).delete()

        for file_child in file_children.values():
            self.analyze(file_child)
