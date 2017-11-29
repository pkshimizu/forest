from rest_framework import serializers


class FileListSerializer(serializers.Serializer):
    use_cache = serializers.BooleanField(required=False, default=False)

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass


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

