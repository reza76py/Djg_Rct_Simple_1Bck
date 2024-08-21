from django.db import models

# Create your models here.
class Content(models.Model):
    header = models.CharField(max_length=255)
    paragraph = models.TextField()

    def __str__(self):
        return self.header