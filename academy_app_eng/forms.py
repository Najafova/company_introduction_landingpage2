from django import forms
from .models import Instructors

class ContactForm(forms.Form):
    fullname = forms.CharField(label='search', required=True, 
                               widget=forms.TextInput(attrs={'placeholder': 'Fullname',
                                                             'class':'input'}))
    from_emaill = forms.EmailField(label='search', required=True, 
                               widget=forms.TextInput(attrs={'placeholder': 'E-mail',
                                                             'class':'input'}))
    message = forms.CharField(label='search', required=True, 
                               widget=forms.Textarea(attrs={'placeholder': 'Question',
                                                            'class':'textarea'}))


