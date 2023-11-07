from django.contrib import admin
from .models import Category, Transaction, Investment, Forecast

"""_summary_
    Make sure each field specified exists in your models. For example, if Transaction model has a date field, it should be referred exactly as such, respecting case sensitivity.

If you don't have custom methods for the list_display, then each item should be the name of a field in the corresponding model. Double-check your models and ensure that all field names match.

After making the necessary corrections, run python manage.py check to check for any system check issues before trying to start the server again. If all checks pass, you should be able to run python manage.py runserver without encountering the admin-related issues.
"""

# @admin.register(Category)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ['name', 'description']

# @admin.register(Transaction)
# class TransactionAdmin(admin.ModelAdmin):
#     list_display = ['name', 'amount', 'date', 'category', 'priority', 'comment', 'frequency']
#     list_filter = ['date', 'category', 'priority']
#     search_fields = ['name']

# @admin.register(Investment)
# class InvestmentAdmin(admin.ModelAdmin):
#     list_display = ['name', 'acquired_value', 'acquired_date', 'recent_value', 'recent_date']
#     list_filter = ['acquired_date', 'recent_date']
#     search_fields = ['name']

# @admin.register(Forecast)
# class ForecastAdmin(admin.ModelAdmin):
#     list_display = ['transaction', 'forecasted_date', 'forecasted_amount', 'interest_rate']
#     list_filter = ['forecasted_date']
#     search_fields = ['transaction__name']
    
