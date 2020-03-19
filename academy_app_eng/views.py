from academy_app_eng.models import *
from academy_app.models import Certificates
from django.core.mail import send_mail, BadHeaderError, EmailMessage
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm
from django.views.generic import TemplateView, ListView
from django.db.models import Q
from django.contrib.auth.decorators import login_required

# Create your views here.
# @login_required

def index_eng(request):
    context = {}
    context['menus'] = Menu.objects.all()
    context['about'] = About.objects.all()
    context['courses'] = Courses.objects.all()
    context['videos'] = Video.objects.all()
    context['instructors_general'] =InstructorsGeneral.objects.all()
    context['intructors'] = Instructors.objects.all()
    context['footers'] = Footer.objects.all()
    context['translations'] = Translations.objects.all()

    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST or None)
        if form.is_valid():
            fullname = form.cleaned_data['fullname']
            from_emaill = form.cleaned_data['from_emaill']
            message = form.cleaned_data['message']
            try:
                msg = EmailMessage(fullname, message, from_emaill, ['info@sumaks.com'], reply_to=[from_emaill])
                msg.send()
                # send_mail(fullname, message, from_emaill, ['gulnarnecefova1996@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('aze_home')
    context['form'] = form

    return render(request, "index1.html", context)
    

def certificate(request):
    context = {}
    return render(request, "certificate.html", context)

    
def handler404(request,exception):
    return render(request, '404eng.html', status=404)
    

class SearchResultView(ListView):
    model = Certificates
    template_name = 'search_results.html'
    
    def get_queryset(self):
        query = self.request.GET.get('q')
        object_list = Certificates.objects.filter(
            Q(id_number=query)
        )
        return object_list