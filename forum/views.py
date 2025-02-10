from django.shortcuts import render, redirect
from .models import Appointment
from django.contrib.auth.decorators import login_required

@login_required
def appointment_list(request):
    appointments = Appointment.objects.filter(user=request.user)
    return render(request, 'appointments/appointment_list.html', {'appointments': appointments})

@login_required
def appointment_detail(request, appointment_id):
    appointment = Appointment.objects.get(id=appointment_id)
    return render(request, 'appointments/appointment_detail.html', {'appointment': appointment})

@login_required
def add_appointment(request):
    if request.method == "POST":
        date = request.POST['date']
        time = request.POST['time']
        reason = request.POST['reason']
        appointment = Appointment(user=request.user, date=date, time=time, reason=reason)
        appointment.save()
        return redirect('appointment_list')
    return render(request, 'appointments/add_appointment.html')