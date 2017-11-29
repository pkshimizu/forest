from rest_framework import viewsets, status
from rest_framework.response import Response

from files.apis.serializers import FileItemSerializer, FileSerializer, FileListSerializer
from files.services.file_service import FileService


class FileViewSet(viewsets.ViewSet):
    def list(self, request):
        serializer = FileListSerializer(data=request.data)
        if serializer.is_valid():
            file_service = FileService()
            files = file_service.list(serializer.data['use_cache'])
            return Response(FileItemSerializer(files, many=True).data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        serializer = FileListSerializer(data=request.data)
        if serializer.is_valid():
            file_service = FileService()
            file = file_service.get(pk, serializer.data['use_cache'])
            return Response(FileSerializer(file).data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

