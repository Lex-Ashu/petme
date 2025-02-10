from django.shortcuts import render, redirect
from .models import Notification
from django.contrib.auth.decorators import login_required

@login_required
def notification_list(request):
    notifications = Notification.objects.filter(user=request.user)
    return render(request, 'notifications/notification_list.html', {'notifications': notifications})

@login_required
def notification_detail(request, notification_id):
    notification = Notification.objects.get(id=notification_id)
    return render(request, 'notifications/notification_detail.html', {'notification': notification})

@login_required
def add_notification(request):
    if request.method == "POST":
        message = request.POST['message']
        notification = Notification(user=request.user, message=message)
        notification.save()
        return redirect('notification_list')
    return render(request, 'notifications/add_notification.html')