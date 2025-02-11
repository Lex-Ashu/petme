from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid username or password')
    return render(request, 'accounts/login.html')

def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        User.objects.create_user(username=username, password=password, email=email)
        return redirect('login')
    return render(request, 'accounts/signup.html')

def otp_view(request):
    #OTP verification logic here
    return render(request, 'accounts/otp.html')

def password_reset_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        #password reset logic here
        messages.success(request, 'Password reset link sent to your email')
        return redirect('login')
    return render(request, 'accounts/password_reset.html')