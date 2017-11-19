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
        self.uuid = File.calc_uuid(path)
        self.path = path
        self.name = os.path.basename(path)
        self.size = os.path.getsize(path)
        self.type = FileType.find_by_path(path)

    @staticmethod
    def roots():
        return File.list('/')

    @staticmethod
    def list(dir_path):
        return [File(os.path.abspath(os.path.join(dir_path, name))) for name in os.listdir(dir_path)]

    @staticmethod
    def calc_uuid(path):
        return str(uuid.uuid5(uuid.NAMESPACE_URL, 'file://%s' % path))

    @property
    def children(self):
        return File.list(self.path) if self.type == FileType.DIR else []
