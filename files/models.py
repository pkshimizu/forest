from django.db import models


class Path(models.Model):
    uuid = models.CharField(max_length=36, null=False, blank=False)
    path = models.CharField(max_length=8192, null=False, blank=False)
