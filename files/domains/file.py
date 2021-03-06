import os
import uuid
from enum import Enum
from operator import attrgetter


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
    def __init__(self, path, children=None):
        self._uuid = File.calc_uuid(path)
        self._path = path
        self._children = children

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
        name = os.path.basename(self.path)
        if name == "":
            return "/"
        return name

    @property
    def size(self):
        return os.path.getsize(self.path)

    @property
    def type(self):
        return FileType.find_by_path(self.path)

    @property
    def children(self):
        children = self._children if self._children else File.list(self.path) if self.type == FileType.DIR else []
        return sorted(children, key=attrgetter('name'))

    @property
    def parent(self):
        parent_path = os.path.dirname(self.path)
        return File(parent_path)

    @property
    def parents(self):
        files = []
        file = self
        files.insert(0, file)
        while not file.is_root:
            file = file.parent
            files.insert(0, file)
        return files

    @property
    def is_root(self):
        return self.path == "/"
