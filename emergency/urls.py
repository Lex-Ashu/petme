from django.urls import path
from . import views

urlpatterns = [
    path('', views.emergency_list, name='emergency_list'),
    path('<int:emergency_id>/', views.emergency_detail, name='emergency_detail'),
    path('add/', views.add_emergency, name='add_emergency'),
]