from django.db import migrations

def create_data(apps, schema_editor):
    Form = apps.get_model('form', 'Form')
    Form(name="Joe Silver", email="joe@email.com", nameCompany="Sber", phone="00000000", status="on").save()
    Form(name="John Smith", email="john@email.com", nameCompany="sadasddasasd", phone="11111111",).save()
    Form(name="Alex Smth", email="alex@email.com", nameCompany="asdasdadsad", phone="22222222",).save()
    Form(name="Kira Night", email="kira@email.com", nameCompany="asdassdadsasdsadsad", phone="33333333",).save()
    Form(name="Amanda Lex", email="amanda@email.com", nameCompany="xcvxccxv", phone="44444444",).save()
    Form(name="Oni Musha", email="oni@email.com", nameCompany="2131qwqwedsaad", phone="44444444",).save()

class Migration(migrations.Migration):

    dependencies = [
        ('form', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]