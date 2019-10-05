from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def team(request):
    return render(request, 'frontend/team.html')
