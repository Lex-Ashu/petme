from django.shortcuts import render, redirect
from .models import Pet
from django.contrib.auth.decorators import login_required

@login_required
def pet_list(request):
    pets = Pet.objects.filter(owner=request.user)
    return render(request, 'pets/pet_list.html', {'pets': pets})

@login_required
def pet_detail(request, pet_id):
    pet = Pet.objects.get(id=pet_id)
    return render(request, 'pets/pet_detail.html', {'pet': pet})

@login_required
def add_pet(request):
    if request.method == "POST":
        name = request.POST['name']
        breed = request.POST['breed']
        age = request.POST['age']
        medical_history = request.POST['medical_history']
        pet = Pet(owner=request.user, name=name, breed=breed, age=age, medical_history=medical_history)
        pet.save()
        return redirect('pet_list')
    return render(request, 'pets/add_pet.html')
