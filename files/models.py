import enum

from django.db import models


class Path(models.Model):
    uuid = models.CharField(max_length=36, null=False, blank=False)
    path = models.CharField(max_length=8192, null=False, blank=False)
    parent_uuid = models.CharField(max_length=36, null=True, blank=False)


class AnalysisStatus(enum.Enum):
    UNDER_ANALYSIS = 1
    DONE = 10
    CANCELED = 20


class AnalysisLog(models.Model):
    status = models.SmallIntegerField(null=False)
    begin_at = models.DateTimeField(null=False)
    end_at = models.DateTimeField(null=True)
    search_count = models.IntegerField(null=False, default=0)
