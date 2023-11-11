from django.db import models
from django.contrib.auth.models import User

# Model for Account
class Account(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    account_name = models.CharField(max_length=50)
    balance = models.DecimalField(max_digits=19, decimal_places=4)

    def __str__(self):
        return self.account_name

# Model for Category
class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.name

# Model for Transaction
class Transaction(models.Model):
    PRIORITY_CHOICES = [
        (1, 'High'),
        (2, 'Medium'),
        (3, 'Low'),
    ]

    FREQUENCY_CHOICES = [
        (1, 'Once'),
        (2, 'Daily'),
        (3, 'Weekly'),
        (4, 'Monthly'),
        (5, 'Yearly'),
    ]
    account = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='transactions')
    amount = models.DecimalField(max_digits=19, decimal_places=4)
    transaction_date = models.DateTimeField()
    priority = models.IntegerField(choices=PRIORITY_CHOICES, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    frequency = models.IntegerField(choices=FREQUENCY_CHOICES, null=True, blank=True)
    
    def __str__(self):
        return f"{self.amount}"

# Model for Investment
class Investment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='investments')
    investment_name = models.CharField(max_length=50)
    initial_amount = models.DecimalField(max_digits=19, decimal_places=4)
    current_value = models.DecimalField(max_digits=19, decimal_places=4)
    purchase_date = models.DateTimeField()

    def __str__(self):
        return self.investment_name

# Model for RealTimeData (consider if storing as JSON is needed or structured data is better)
class RealTimeData(models.Model):
    data = models.JSONField()  # This requires Django 3.1 or higher
    last_updated = models.DateTimeField(auto_now=True)

# Model for Forecast
class Forecast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='forecasts')
    projected_income = models.DecimalField(max_digits=19, decimal_places=4)
    forecast_date = models.DateTimeField()

    def __str__(self):
        return f"Forecast for {self.user.username} at {self.forecast_date}"
