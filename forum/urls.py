from django.urls import path
from . import views

urlpatterns = [
    path('', views.forum_list, name='forum_list'),
    path('<int:forum_id>/', views.forum_detail, name='forum_detail'),
    path('add/', views.add_forum, name='add_forum'),
]