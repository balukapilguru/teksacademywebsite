import { Component, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-medicalcoding-webinar',
  templateUrl: './medicalcoding-webinar.component.html',
  styleUrls: ['./medicalcoding-webinar.component.scss'],
})
export class MedicalcodingWebinarComponent {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private el: ElementRef
  ) {}

  activeTab = 1;

  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }
  // activeTab = 'home'; // Set the default active tab

  // setActiveTab(tab: string): void {
  //   this.activeTab = tab;
  // }

  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      // Adjust the offset value as needed
      const offset = 100; // Change this value according to your preference
      const elementPosition = element.offsetTop - offset;
      window.scroll({ top: elementPosition, behavior: 'smooth' });
    }
  }

  feedbackSlides2: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    autoHeight: true,
    items: 1,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  };
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle(
      'Medical Coding Course| Hyderabad | Teks Academy | Placemnets       '
    );

    // set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Our comprehensive medical coding education can help you discover profitable career opportunities. Industry professionals can teach you online. Enroll now to succeed!',
    });

    const openBtn = document.getElementById('open-form')!;
    const popupForm = document.getElementById('popup-form')!;

    openBtn.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });

    popupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
    });

    const dsForm = document.getElementById('dsForm') as HTMLFormElement;

    // Regular expressions to validate email and phone number format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    dsForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = (dsForm.querySelector('#name') as HTMLInputElement).value;
      const email = (dsForm.querySelector('#email') as HTMLInputElement).value;
      const phone = (dsForm.querySelector('#phone') as HTMLInputElement).value;
      const city = (dsForm.querySelector('#city') as HTMLInputElement).value;

      // Check if all fields are filled
      if (name && email && phone && city) {
        if (name === '') {
          alert('Please enter your name.');
        } else if (email === '' || !emailRegex.test(email)) {
          alert('Please enter a valid email address.');
        } else if (phone === '' || !phoneRegex.test(phone)) {
          alert(
            'Please enter a 10-digit phone number without spaces or dashes.'
          );
        } else {
          // Process form data and download syllabus
          const url =
            'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/download-syllabus/Digital+Marketing.pdf';
          window.open(url, '_blank');
        }
      } else {
        // One or more required fields are empty
        alert('Please fill in all required fields.');
      }
    });
  }

  // for side bar

  scname: string = '';
  scemail: string = '';
  sccontactnumber: string = '';
  sccourse: string = 'Medical Coding';
  screferedby: string = '';

  resetForm() {
    this.scname = '';
    this.scemail = '';
    this.sccontactnumber = '';
    this.sccourse = '';
    this.screferedby = '';
  }

  scFormSubmit() {
    const scformdata = {
      scname: this.scname,
      scemail: this.scemail,
      sccontactnumber: this.sccontactnumber,
      sccourse: this.sccourse,
      screferedby: this.screferedby,
    };

    if (
      !this.scname ||
      !this.scemail ||
      !this.sccontactnumber ||
      !this.sccourse ||
      !this.screferedby
    ) {
      alert('please fill all required fields');
      console.error('please fill all fields');
      return;
    }
    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }

    this.http
      .post(environment.apiUrl + '/webinars', scformdata, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('form submited successfully', response);
          this.router.navigate(['/thankyou-medicalcoding']);
          // window.open('https://teksacademylms.graphy.com/courses/Free-Webinar-on-AWSDevOps-6568778ae4b0cad9d0f188b0', '_blank');
          this.resetForm();
        },
        (error) => {
          console.error('error form submit', error);
        }
      );

    this.resetForm();
  }
}
