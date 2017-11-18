from rest_framework import routers

from files.apis.views import FileViewSet

router = routers.DefaultRouter()
router.register(r'', FileViewSet, base_name='file')
