import os
import uuid
from enum import Enum


class FileType(Enum):
    FILE = 'file'
    DIR = 'dir'
    OTHER = 'other'

    @staticmethod
    def find_by_path(path):
        if os.path.isfile(path):
            return FileType.FILE
        elif os.path.isdir(path):
            return FileType.DIR
        else:
            return FileType.OTHER

    def __str__(self):
        return self.value


class File:
    def __init__(self, path):
        self._uuid = File.calc_uuid(path)
        self._path = path

    @staticmethod
    def roots():
        return File.list('/')

    @staticmethod
    def list(dir_path):
        try:
            return [File(os.path.abspath(os.path.join(dir_path, name))) for name in os.listdir(dir_path)]
        except PermissionError:
            return []

    @staticmethod
    def calc_uuid(path):
        return str(uuid.uuid5(uuid.NAMESPACE_URL, 'file://%s' % path))

    @property
    def uuid(self):
        return self._uuid

    @property
    def path(self):
        return self._path

    @property
    def name(self):
        return os.path.basename(self.path)

    @property
    def size(self):
        return os.path.getsize(self.path)

    @property
    def type(self):
        return FileType.find_by_path(self.path)

    @property
    def children(self):
        return File.list(self.path) if self.type == FileType.DIR else []
