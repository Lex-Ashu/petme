from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('otp/', views.otp_view, name='otp'),
    path('password-reset/', views.password_reset_view, name='password_reset'),
]