from .models import *
from django.core.mail import send_mail, BadHeaderError, EmailMessage
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import *
from django.views.generic import TemplateView, ListView
from django.db.models import Q
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.contrib.auth.decorators import login_required
# from CompressUpload.models import Upload
# from CompressUpload.forms import imageUploadForm

# Create your views here.

@login_required
def simple_upload_aze(request):
    context = {}
    context["form"] = ImageForm
    if request.method == "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            img = form.save(commit=False)
            img.save()
            return redirect("aze_home")
        else:
            context["form"] = form
    return render(request, 'simple_upload.html', context)

    

@login_required
def simple_upload_eng(request):
    context = {}
    context["form"] = ImageFormEng
    if request.method == "POST":
        form = ImageFormEng(request.POST, request.FILES)
        if form.is_valid():
            img = form.save(commit=False)
            img.save()
            return redirect("aze_home")
        else:
            context["form"] = form
    return render(request, 'simple_upload_eng.html', context)



def index(request):
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
            except BadHeaderError:
                return HttpResponse('Mesaj getmedi.')
            return redirect('aze_home')
    context['form'] = form
    return render(request, "index.html", context)
    
    
def certificates(request):
    context = {}
    return render(request, "certificates.html", context)


def handler404(request,exception):
    return render(request, '404.html', status=404)


# def detail(request):
#     context = {}
#     context["details"] = Certificates.objects.all()
#     return render(request, "detail.html", context)

# ishlek olan budur
def search(request):
    context = {}
    query = request.GET.get('q')
    object_list = Certificates.objects.filter(
        Q(id_number=query)
    )
    if object_list:
        context["data"] = object_list
        print(object_list)
        return render(request, "search_results.html",context)
    else:
        return render(request, "certficate_not_found.html")


class SearchResultView(ListView):
    model = Certificates
    template_name = 'search_results.html'
    
    def get_queryset(self):
        query = self.request.GET.get('q')
        object_list = Certificates.objects.filter(
            Q(id_number=query)
        )
        return object_list

# 456789