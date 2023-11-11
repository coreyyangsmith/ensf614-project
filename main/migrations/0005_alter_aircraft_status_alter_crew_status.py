# Generated by Django 4.2.7 on 2023-11-11 14:58

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0004_alter_aircraft_status_alter_seat_type"),
    ]

    operations = [
        migrations.AlterField(
            model_name="aircraft",
            name="status",
            field=models.CharField(
                choices=[
                    ("AVL", "Available"),
                    ("RES", "Reserved"),
                    ("MTN", "Maintenance"),
                    ("UNV", "Unavailable"),
                ],
                max_length=3,
            ),
        ),
        migrations.AlterField(
            model_name="crew",
            name="status",
            field=models.CharField(
                choices=[
                    ("AVL", "Available"),
                    ("REG", "Registered"),
                    ("UNV", "Unavailable"),
                ],
                max_length=3,
            ),
        ),
    ]
