from django import forms
# from django.forms import ModelForm, Textarea, TextInput, CharField, FileInput
from .models import *
from academy_app_eng.models import Instructors as t
class ContactForm(forms.Form):
    fullname = forms.CharField(label='search', required=True, 
                               widget=forms.TextInput(attrs={'placeholder': 'Ad və Soyad',
                                                             'class':'input'}))
    from_emaill = forms.EmailField(label='search', required=True, 
                               widget=forms.TextInput(attrs={'placeholder': 'E-poçt',
                                                             'class':'input'}))
    message = forms.CharField(label='search', required=True, 
                               widget=forms.Textarea(attrs={'placeholder': 'Sualınızı qeyd edin',
                                                            'class':'textarea'}))
    # widgets = {
    #         "fullname": TextInput(attrs={"placeholder": "Adınızı qeyd edin.."}),
    #         "from_email": TextInput(attrs={"placeholder": "Soyadınızı qeyd.."}),
    #         "message": Textarea(attrs={"placeholder": "ex: animaks@gmail.com"}),

    #     }


class ImageForm(forms.ModelForm):
    class Meta:
        model = Instructors
        fields = ("fullname", "description", "image")
        # widgets = {
        #     'image': forms.TextInput(attrs={'class': 'input-file', 'type':'file', 'name':'file_cv', 'id':'file'}),
        # }


class ImageFormEng(forms.ModelForm):
    class Meta:
        model = t
        fields = ("fullname", "description", "image")
        # widgets = {
        #     'image': forms.TextInput(attrs={'class': 'input-file', 'type':'file', 'name':'file_cv', 'id':'file'}),
        # }