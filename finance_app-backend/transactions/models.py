from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Model for Account
class Account(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    account_name = models.CharField(max_length=50)
    balance = models.DecimalField(max_digits=19, decimal_places=4, default=0.00)
    created_at = models.DateTimeField(default= timezone.now)
    modified_at = models.DateTimeField(default= timezone.now)
    def __str__(self):
        return self.account_name

# Model for Category
class Category(models.Model):
    MAIN_CATEGORIES = [
        (1, 'Transaction'),
        (2, 'Investment'),
        (3, 'Debt')
    ]
    main_category = models.IntegerField(choices=MAIN_CATEGORIES, null=True, blank=True, default=1)
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default= timezone.now)
    modified_at = models.DateTimeField(default= timezone.now)
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
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='transactions')
    amount = models.DecimalField(max_digits=19, decimal_places=4, default=0.00)
    transaction_date = models.DateTimeField()
    frequency = models.IntegerField(choices=FREQUENCY_CHOICES, null=True, blank=True, default=1)
    priority = models.IntegerField(choices=PRIORITY_CHOICES, null=True, blank=True, default=1)
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default= timezone.now)
    modified_at = models.DateTimeField(default= timezone.now)
    def __str__(self):
        return f"{self.amount}"

# Model for Investment
class Investment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='investments')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='investments')
    investment_name = models.CharField(max_length=50)
    initial_amount = models.DecimalField(max_digits=19, decimal_places=4, default=0.00)
    current_value = models.DecimalField(max_digits=19, decimal_places=4, default=0.00)
    purchase_date = models.DateTimeField()
    created_at = models.DateTimeField(default= timezone.now)
    modified_at = models.DateTimeField(default= timezone.now)
    def __str__(self):
        return self.investment_name

# Model for Debt
class Debt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='debts')
    debt_name = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='debts')
    current_amount = models.DecimalField(max_digits=19, decimal_places=4)
    current_value = models.DecimalField(max_digits=19, decimal_places=4)
    interest_rate = models.DecimalField(max_digits=19, decimal_places=4)
    purchase_date = models.DateTimeField()
    created_at = models.DateTimeField(default= timezone.now)
    modified_at = models.DateTimeField(default= timezone.now)
    def __str__(self):
        return self.debt_name

# Model for RealTimeData (consider if storing as JSON is needed or structured data is better)
class RealTimeData(models.Model):
    data = models.JSONField()  # This requires Django 3.1 or higher
    last_updated = models.DateTimeField()

# Model for Forecast
class Forecast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='forecasts')
    projected_income = models.DecimalField(max_digits=19, decimal_places=4)
    forecast_date = models.DateTimeField()
    created_at = models.DateTimeField(default= timezone.now)
    modified_at = models.DateTimeField(default= timezone.now)
    def __str__(self):
        return f"Forecast for {self.user.username} at {self.forecast_date}"
