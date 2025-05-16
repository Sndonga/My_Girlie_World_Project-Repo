from django.contrib import admin # type: ignore
from django.urls import path # type: ignore
from django.views.generic import TemplateView  # type: ignore # Add this import

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),  # Homepage
]