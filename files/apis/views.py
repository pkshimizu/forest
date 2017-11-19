from rest_framework import viewsets
from rest_framework.response import Response

from files.apis.serializers import FileItemSerializer, FileSerializer
from files.services.file_service import FileService


class FileViewSet(viewsets.ViewSet):
    def list(self, request):
        file_service = FileService()
        files = file_service.list()
        return Response(FileItemSerializer(files, many=True).data)

    def retrieve(self, request, pk=None):
        file_service = FileService()
        file = file_service.get(pk)
        return Response(FileSerializer(file).data)

