from django.db import models
from django.contrib.auth.models import AbstractUser
from typing import Dict, Any

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, blank=True)
    preferences = models.JSONField(default=dict)  # type: Dict[str, Any]

    def __str__(self) -> str:
        return self.email

    class Meta:
        verbose_name = "MGW User"