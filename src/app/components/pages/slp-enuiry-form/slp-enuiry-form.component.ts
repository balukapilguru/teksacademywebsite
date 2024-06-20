import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-slp-enuiry-form',
  templateUrl: './slp-enuiry-form.component.html',
  styleUrls: ['./slp-enuiry-form.component.scss'],
})
export class SlpEnuiryFormComponent {
  // recaptchaValue!: string;
  // siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private router: Router // private reCaptchaV3Service: ReCaptchaV3Service,
  ) {}

  slpefname: string = '';
  slpefemail: string = '';
  slpefphone: string = '';
  slpefcourse: string = '';
  slpefcity: string = '';

  resetForm() {
    this.slpefname = '';
    this.slpefemail = '';
    this.slpefphone = '';
    this.slpefcourse = '';
    this.slpefcity = '';
  }
  eformData() {
    // if (!this.recaptchaValue) {
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }

    const enquiryFormData = {
      slpefname: this.slpefname,
      slpefemail: this.slpefemail,
      slpefphone: this.slpefphone,
      slpefcourse: this.slpefcourse,
      slpefcity: this.slpefcity,
    };

    if (
      !this.slpefname ||
      !this.slpefemail ||
      !this.slpefphone ||
      !this.slpefcourse ||
      !this.slpefcity
    ) {
      alert('please fill all required fields');
      console.error('please fill all fields');
      return;
    }

    this.http
      .post(environment.apiUrl + '/slp-enquiry-form-data', enquiryFormData, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('form submited sucssesfull', response);
          this.router.navigate(['/thank-you']);
          this.resetForm();
        },
        (error) => {
          console.error('error form submite', error);
        }
      );
    this.resetForm();
  }
  ngOnInit() {
    $('.user_number').keydown(function (event) {
      if (event.keyCode === 38 || event.keyCode === 40) {
        // Up or down arrow key
        event.preventDefault(); // Prevent default behavior
      }
    });
  }
  // ngOnInit(){
  //   const dsForm = document.getElementById('dsForm') as HTMLFormElement;
  //   const dssubmit = document.getElementById('efsubmit');

  //   dsForm.addEventListener('submit', function(event) {
  //           event.preventDefault();

  //           (<HTMLInputElement>dssubmit).disabled = true;

  //   });

  // }

  // redirect
  // ngOnInit(){
  //   const dsForm = document.getElementById('dsForm') as HTMLFormElement;

  //     // Regular expressions to validate email and phone number format
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //       const phoneRegex = /^\d{10}$/;

  //     dsForm.addEventListener('submit', function(event) {
  //       event.preventDefault();

  //         const name = (dsForm.querySelector('#name') as HTMLInputElement).value;
  //         const email = (dsForm.querySelector('#email') as HTMLInputElement).value;
  //         const phone = (dsForm.querySelector('#mnumber') as HTMLInputElement).value;
  //         const city = (dsForm.querySelector("#city") as HTMLInputElement).value;
  //         const course = (dsForm.querySelector('#course') as HTMLInputElement).value;

  //         // Check if all fields are filled
  //         if (name && email && phone && course && city) {
  //           // Check if email and phone number are in the correct format
  //           if (!emailRegex.test(email)) {
  //             alert('Please enter a valid email address.');
  //           } else if (!phoneRegex.test(phone)) {
  //             alert('Please enter a 10-digit phone number without spaces or dashes.');
  //           } else {
  //             // Process form data and download syllabus
  //             const url = 'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/download-syllabus/Advanced+Excel.pdf';
  //             window.open(url, '_blank');
  //           }
  //         } else {
  //           alert('Please fill in all required fields.');
  //         }
  //       });
  // }
}
