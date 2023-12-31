# Generated by Django 4.2.6 on 2023-11-12 05:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('transactions', '0003_alter_transaction_account'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='account',
            new_name='user',
        ),
        migrations.AddField(
            model_name='account',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='account',
            name='modified_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='category',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='category',
            name='main_category',
            field=models.IntegerField(blank=True, choices=[(1, 'Transaction'), (2, 'Investment'), (3, 'Debt')], default=1, null=True),
        ),
        migrations.AddField(
            model_name='category',
            name='modified_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='forecast',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='forecast',
            name='modified_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='investment',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='investments', to='transactions.category'),
        ),
        migrations.AddField(
            model_name='investment',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='investment',
            name='modified_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='transaction',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='transaction',
            name='modified_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='account',
            name='balance',
            field=models.DecimalField(decimal_places=4, default=0.0, max_digits=19),
        ),
        migrations.AlterField(
            model_name='investment',
            name='current_value',
            field=models.DecimalField(decimal_places=4, default=0.0, max_digits=19),
        ),
        migrations.AlterField(
            model_name='investment',
            name='initial_amount',
            field=models.DecimalField(decimal_places=4, default=0.0, max_digits=19),
        ),
        migrations.AlterField(
            model_name='realtimedata',
            name='last_updated',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='amount',
            field=models.DecimalField(decimal_places=4, default=0.0, max_digits=19),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='frequency',
            field=models.IntegerField(blank=True, choices=[(1, 'Once'), (2, 'Daily'), (3, 'Weekly'), (4, 'Monthly'), (5, 'Yearly')], default=1, null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='priority',
            field=models.IntegerField(blank=True, choices=[(1, 'High'), (2, 'Medium'), (3, 'Low')], default=1, null=True),
        ),
        migrations.CreateModel(
            name='Debt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('debt_name', models.CharField(max_length=50)),
                ('current_amount', models.DecimalField(decimal_places=4, max_digits=19)),
                ('current_value', models.DecimalField(decimal_places=4, max_digits=19)),
                ('interest_rate', models.DecimalField(decimal_places=4, max_digits=19)),
                ('purchase_date', models.DateTimeField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('modified_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='debts', to='transactions.category')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='debts', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
