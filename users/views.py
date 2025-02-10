from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

@login_required
def user_list(request):
    users = User.objects.all()
    return render(request, 'users/user_list.html', {'users': users})

@login_required
def user_detail(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'users/user_detail.html', {'user': user})

@login_required
def add_user(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        user = User.objects.create_user(username=username, email=email, password=password)
        return redirect('user_list')
    return render(request, 'users/add_user.html')