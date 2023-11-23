# Generated by Django 4.2.7 on 2023-11-23 16:57

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
                ("company", models.CharField(max_length=50)),
                ("type", models.CharField(max_length=100)),
                ("capacity", models.PositiveSmallIntegerField()),
                ("seat_rows", models.PositiveSmallIntegerField()),
                ("seat_columns", models.CharField(max_length=10)),
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
                ("fuel_per_km", models.DecimalField(decimal_places=2, max_digits=4)),
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
                ("name", models.CharField(max_length=100)),
                ("airport_code", models.CharField(max_length=3)),
                ("latitude", models.DecimalField(decimal_places=7, max_digits=10)),
                ("longitude", models.DecimalField(decimal_places=7, max_digits=10)),
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
                ("departure_time", models.DateTimeField()),
                ("arrival_time", models.DateTimeField()),
                ("distance", models.FloatField()),
                ("est_duration", models.TimeField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "aircraft_ref",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to="main.aircraft",
                    ),
                ),
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
                ("row_position", models.PositiveSmallIntegerField()),
                ("column_position", models.PositiveSmallIntegerField()),
                ("available", models.BooleanField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "aircraft_ref",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="main.aircraft"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Passenger",
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
                ("first_name", models.CharField(max_length=100)),
                ("last_name", models.CharField(max_length=100)),
                (
                    "flight_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="main.flight"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="FlightCrew",
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
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "crew_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="main.crew"
                    ),
                ),
                (
                    "flight_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="main.flight"
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="flight",
            name="crews_ref",
            field=models.ManyToManyField(through="main.FlightCrew", to="main.crew"),
        ),
        migrations.AddField(
            model_name="flight",
            name="end_point",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.DO_NOTHING,
                related_name="destination",
                to="main.destination",
            ),
        ),
        migrations.AddField(
            model_name="flight",
            name="start_point",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.DO_NOTHING,
                related_name="origin",
                to="main.destination",
            ),
        ),
    ]
