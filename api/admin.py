from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class MyUserAdmin(UserAdmin):
    add_fieldsets = (
        (None, {
            'fields': ('comp_id', 'username', 'password1', 'password2'),
        }),
    )
    fieldsets = (
        (None, {'fields': ('comp_id','username', 'password')}),
        (('Personal info'), {'fields': ('first_name', 'last_name', 'email')}),
        (('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

admin.site.register(User, MyUserAdmin)
