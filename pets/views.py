from django.shortcuts import render
from .models import Pet

def pet_list(request):
    pets = Pet.objects.all()
    return render(request, 'pets/pet_list.html', {'pets': pets})

def pet_detail(request, pet_id):
    pet = Pet.objects.get(id=pet_id)
    return render(request, 'pets/pet_detail.html', {'pet': pet})