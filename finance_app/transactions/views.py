from django.shortcuts import render
from rest_framework import viewsets
from .models import Category, Transaction, Investment, Forecast,Account
from .serializers import (CategorySerializer, TransactionSerializer,
                          InvestmentSerializer, ForecastSerializer,AccountSerializer)
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
import csv
import io
from rest_framework.decorators import action

class CSVUploadView(APIView):
    #permission_classes = [IsAuthenticated]# enable to only allow authenticated users to access. this can be change to 
    parser_classes = (MultiPartParser,)

    def post(self, request, format=None):
        # Checks if the request has a file
        if 'file' not in request.data:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        csv_file = request.data['file']
        data_set = csv_file.read().decode('UTF-8')
        io_string = io.StringIO(data_set)
        reader = csv.reader(io_string)

        for row in reader:
            # Here you'll process your CSV data
            print(row)

        return Response(status=status.HTTP_200_OK)

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    
    @action(detail=False, methods=['get'])
    def group_by_category(self, request):
        """Override the get methods to return different output or perform custom action. 
        read-only endpoint (methods=['get']), 
        and detail=False indicates that it's not operating on a single object but rather the whole queryset.

        Args:
            request (_type_): type of request to override

        Returns:
            _type_: the outcome of the request
        """
        grouped_transactions = {}  # Dictionary to hold transactions grouped by category

        for transaction in self.queryset:
            category_name = transaction.category.name
            if category_name not in grouped_transactions:
                grouped_transactions[category_name] = []
            grouped_transactions[category_name].append(transaction)

        # Perform calculations or manipulations as needed
        # ...

        return Response(grouped_transactions)

class InvestmentViewSet(viewsets.ModelViewSet):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer

class ForecastViewSet(viewsets.ModelViewSet):
    queryset = Forecast.objects.all()
    serializer_class = ForecastSerializer

