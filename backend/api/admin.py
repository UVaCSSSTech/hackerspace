from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class MyUserAdmin(UserAdmin):
    add_fieldsets = (
        (None, {
            'fields': ('comp_id', 'username', 'password1', 'password2'),
        }),
    )

admin.site.register(User, UserAdmin)
