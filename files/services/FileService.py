class FileService:
    def list(self, uuid=None):
        return []

    def get(self, uuid):
        return {
            'uuid': uuid,
            'path': '',
            'name': '',
            'type': '',
            'size': 0,
            'children': [],
        }
