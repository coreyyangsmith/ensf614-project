# Generated by Django 4.2.7 on 2023-11-11 17:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Aircraft",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("type", models.CharField(max_length=100)),
                ("capacity", models.IntegerField(default=0)),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("AVL", "Available"),
                            ("RES", "Reserved"),
                            ("MTN", "Maintenance"),
                            ("UNV", "Unavailable"),
                        ],
                        default="AVL",
                        max_length=3,
                    ),
                ),
                ("amount", models.FloatField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Crew",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(max_length=50)),
                ("last_name", models.CharField(max_length=50)),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("AVL", "Available"),
                            ("REG", "Registered"),
                            ("UNV", "Unavailable"),
                        ],
                        default="AVL",
                        max_length=3,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Destination",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("city", models.CharField(max_length=75)),
                ("country", models.CharField(max_length=75)),
                ("country_code", models.CharField(max_length=3)),
                ("latitude", models.DecimalField(decimal_places=4, max_digits=7)),
                ("longitude", models.DecimalField(decimal_places=4, max_digits=7)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Seat",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "type",
                    models.CharField(
                        choices=[
                            ("ORD", "Ordinary"),
                            ("CMF", "Comfort"),
                            ("BUS", "Business"),
                        ],
                        default="ORD",
                        max_length=3,
                    ),
                ),
                ("amount", models.DecimalField(decimal_places=2, max_digits=5)),
                ("multiplier", models.DecimalField(decimal_places=2, max_digits=3)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Flight",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("date", models.DateField()),
                ("depature_time", models.DateTimeField()),
                ("arrival_time", models.DateTimeField()),
                ("distance", models.FloatField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "end_point",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        related_name="destination",
                        to="main.destination",
                    ),
                ),
                (
                    "start_point",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        related_name="origin",
                        to="main.destination",
                    ),
                ),
            ],
        ),
    ]
