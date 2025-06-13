from rest_framework import generics # type: ignore
from rest_framework.response import Response # type: ignore
from typing import List
from .models import Product
from .serializers import ProductSerializer # type: ignore

class ProductListAPI(generics.ListAPIView):
    """API endpoint to list active products"""
    serializer_class = ProductSerializer

    def get_queryset(self) -> List[Product]:
        return Product.objects.filter(is_active=True).order_by('name')

    def list(self, request, *args, **kwargs) -> Response:
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'status': 'success',
            'products': serializer.data
        })