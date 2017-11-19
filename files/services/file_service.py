import os

from files.domains.file import File


class FileService:
    def list(self):
        return File.roots()

    def get(self, uuid):
        return {
            'uuid': uuid,
            'path': '',
            'name': '',
            'type': '',
            'size': 0,
            'children': [],
        }
