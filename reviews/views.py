from django.shortcuts import render, redirect
from .models import Review
from django.contrib.auth.decorators import login_required

@login_required
def review_list(request):
    reviews = Review.objects.all()
    return render(request, 'reviews/review_list.html', {'reviews': reviews})

@login_required
def review_detail(request, review_id):
    review = Review.objects.get(id=review_id)
    return render(request, 'reviews/review_detail.html', {'review': review})

@login_required
def add_review(request):
    if request.method == "POST":
        title = request.POST['title']
        content = request.POST['content']
        rating = request.POST['rating']
        review = Review(user=request.user, title=title, content=content, rating=rating)
        review.save()
        return redirect('review_list')
    return render(request, 'reviews/add_review.html')