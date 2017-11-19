from rest_framework import serializers


class FileItemSerializer(serializers.Serializer):
    uuid = serializers.CharField(max_length=36)
    path = serializers.CharField(max_length=8192)
    name = serializers.CharField(max_length=1024)
    type = serializers.CharField(max_length=8)
    size = serializers.IntegerField()

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass


class FileSerializer(serializers.Serializer):
    uuid = serializers.CharField(max_length=36)
    path = serializers.CharField(max_length=8192)
    name = serializers.CharField(max_length=1024)
    type = serializers.CharField(max_length=8)
    size = serializers.IntegerField()
    children = FileItemSerializer(many=True)

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

