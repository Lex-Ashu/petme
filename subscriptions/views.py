from django.shortcuts import render, redirect
from .models import Subscription
from django.contrib.auth.decorators import login_required

@login_required
def subscription_list(request):
    subscriptions = Subscription.objects.filter(user=request.user)
    return render(request, 'subscriptions/subscription_list.html', {'subscriptions': subscriptions})

@login_required
def subscription_detail(request, subscription_id):
    subscription = Subscription.objects.get(id=subscription_id)
    return render(request, 'subscriptions/subscription_detail.html', {'subscription': subscription})

@login_required
def add_subscription(request):
    if request.method == "POST":
        name = request.POST['name']
        price = request.POST['price']
        duration = request.POST['duration']
        subscription = Subscription(user=request.user, name=name, price=price, duration=duration)
        subscription.save()
        return redirect('subscription_list')
    return render(request, 'subscriptions/add_subscription.html')