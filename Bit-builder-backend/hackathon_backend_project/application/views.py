from django.shortcuts import render
from django.http import JsonResponse

def sample_get_api(request):
    if request.method == "GET":
        return render(request, 'hello.html')