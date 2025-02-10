from django.db import models
from users.models import User

class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField()
    description = models.TextField()

    def __str__(self):
        return f"{self.user.username} - {self.date}"