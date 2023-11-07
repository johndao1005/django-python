from django.contrib import admin
from .models import Category, Transaction, Investment, Forecast

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ['name', 'amount', 'date', 'category', 'priority', 'comment', 'frequency']
    list_filter = ['date', 'category', 'priority']
    search_fields = ['name']

@admin.register(Investment)
class InvestmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'acquired_value', 'acquired_date', 'recent_value', 'recent_date']
    list_filter = ['acquired_date', 'recent_date']
    search_fields = ['name']

@admin.register(Forecast)
class ForecastAdmin(admin.ModelAdmin):
    list_display = ['transaction', 'forecasted_date', 'forecasted_amount', 'interest_rate']
    list_filter = ['forecasted_date']
    search_fields = ['transaction__name']
