from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='pets_index'),
    # Add other URL patterns for the pets app here
]