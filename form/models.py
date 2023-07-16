from django.db import models

# Create your models here.
class Form(models.Model):
    name = models.CharField("Name", max_length=240)
    nameCompany = models.CharField("nameCompany", max_length=240)
    status = models.CharField("status", max_length=240)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name
