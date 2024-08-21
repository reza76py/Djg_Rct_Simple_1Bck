from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Content
from .serializer import ContentSerializer

class ContentView(APIView):
    def get(self, request):
        content = Content.objects.first()
        serializer = ContentSerializer(content)
        return Response(serializer.data)