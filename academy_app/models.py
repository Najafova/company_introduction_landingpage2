from django.db import models
import sys
# import  qrcode
from PIL import Image
from io import BytesIO
# import StringIO
from django.core.files.uploadedfile import InMemoryUploadedFile
# from optimized_image.fields import OptimizedImageField

class Menu(models.Model):
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    url_id = models.CharField(max_length=255, default='')
    order = models.IntegerField()
    status = models.BooleanField()

    def __str__(self):
        return "{}".format(self.name)

        class Meta:
            ordering = ['order',]
            verbose_name = "Menu"
            verbose_name_plural = "Menus"


class About(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return "{}".format(self.title)

        class Meta:
            verbose_name = "About"
            verbose_name_plural = "About"


class Courses(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    electronics_logo = models.CharField(max_length=255, default='')
    engineering_logo = models.CharField(max_length=255, default='')
    three_d_printing_logo = models.CharField(max_length=255, default='')
    technical_support_logo = models.CharField(max_length=255, default='')

    def __str__(self):
        return "{}".format(self.title)

        class Meta:
            verbose_name = "Course"
            verbose_name_plural = "Courses"


class Video(models.Model):
    url = models.CharField(max_length=255)

    def __str__(self):
        return "{}".format(self.url)

        class Meta:       
            verbose_name = "Video"
            verbose_name_plural = "Video"


class InstructorsGeneral(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return "{}".format(self.title)

        class Meta:
            verbose_name = "Instructor section"
            verbose_name_plural = "Instructor section"

class Instructors(models.Model):
    fullname = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='website/', 
                              null=True, blank=True)

    def save(self):
            im = Image.open(self.image)
            output = BytesIO()
            im = im.resize( (500,500) )
            im.save(output, format='JPEG', quality=99)
            output.seek(0)
            self.image = InMemoryUploadedFile(output,'ImageField', "%s.jpg" %self.image.name.split('.')[0], 'image/jpeg', sys.getsizeof(output), None)
            super(Instructors,self).save()


    def __str__(self):
        return "{}".format(self.fullname)
        class Meta:
            verbose_name = "Instructor"
            verbose_name_plural = "Instructors"

 


class Footer(models.Model):
    facebook = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    youtube = models.URLField(null=True, blank=True)
    email = models.CharField(max_length=255)
    telephone = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    rights = models.CharField(max_length=500)

    def __str__(self):
        return "{} {} {}".format(self.facebook, self.linkedin,
                                          self.youtube)

    class Meta:
        verbose_name = "Footer"
        verbose_name_plural = "Footer"
        

class Translations(models.Model):
    moto = models.CharField(max_length=500, default="#")

    class Meta:
        verbose_name = "Translation"
        verbose_name_plural = "Translation"


class Certificates(models.Model):
    id_number = models.CharField(max_length=255, null=True, blank=True)
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    telephone = models.CharField(max_length=255, null=True, blank=True)
    email = models.CharField(max_length=255, null=True, blank=True)
    qr_code = models.ImageField(upload_to='website/', 
                              null=True, blank=True)
    # qr_code = models.ImageField(upload_to='website/', 
    #                           null=True, blank=True)

    PARTICIPATED = 'PR'
    SUCCESSFULLY_PARTICIPATED = 'SP'
    DISTINCTION = 'DS'
    LEVEL = (
        (PARTICIPATED, 'Participated'),
        (SUCCESSFULLY_PARTICIPATED, 'Successfully Participated'),
        (DISTINCTION, 'Distinction'),
    )
    level = models.CharField(max_length=255, choices=LEVEL, default=PARTICIPATED)

    SUMMER = 'Sum'
    FALL = 'Fa'
    WINTER = 'Win'
    TERM = (
        (SUMMER, 'Summer'),
        (FALL, 'Fall'),
        (WINTER, 'Winter'),
    )
    term = models.CharField(max_length=255, choices=TERM, default=SUMMER)
    image = models.ImageField(upload_to='website/', 
                              null=True, blank=True)

    def __str__(self):
        return "{} {} {}".format(self.id_number, self.first_name, self.last_name,
                                 self.level, self.term, self.telephone, self.email)

    # def certificate_qr(id_number):
    #     qr = qrcode.QRCode(
    #     version=1,
    #     error_correction=qrcode.constants.ERROR_CORRECT_L,
    #     box_size=15,
    #     border=5
    # )

        data = 'http://academy.sumaks.com/en/search/?q=' + str(id_number)
        qr.add_data(data)
        qr.make(fit=True)
        img = qr.make_image(fill='red', back='pink')
        img.save('youtub channel qr code.png')

    

    class Meta:
        verbose_name = "Sertifikat"
        verbose_name_plural = "Sertifikatlar"
