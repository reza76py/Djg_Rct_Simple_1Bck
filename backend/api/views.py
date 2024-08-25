from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Content
from .serializer import ContentSerializer

class ContentView(APIView):
    def get(self, request):
        content = Content.objects.first()
        serializer = ContentSerializer(content)
        return Response(serializer.data)

    def post(self, request):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
