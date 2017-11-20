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
