import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  isSubmitting: boolean = false;
  isSubmitted: boolean = true;
  apiUrl = environment.apiUrl;

  // siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  constructor(
    private http: HttpClient,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  recaptchaValue!: string;
  name: string = '';
  email: string = '';
  number: string = '';
  course: string = '';
  city: string = '';

  cformSubmit() {
    // const waitAlert = setTimeout(() => {
    //     alert('Please wait...');
    // }, 1000);
    this.isSubmitting = true;
    this.isSubmitting = false;

    const cformData = {
      name: this.name,
      email: this.email,
      number: this.number,
      course: this.course,
      city: this.city,
    };

    if (
      !this.name ||
      !this.email ||
      !this.number ||
      !this.course ||
      !this.city
    ) {
      alert('please fill all required fields');
      console.error('please fill all required fields');
      return;
    }
    // if(!this.recaptchaValue){
    //     alert('Please complete the reCAPTCHA.');
    //     return;
    // }

    this.http
      .post(environment.apiUrl + '/contactpage-form-data', cformData, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('form data submited successfully', response);
          this.router.navigate(['/thank-you']);
          this.resetForm();
        },
        (error) => {
          console.log('error submit form data', error);
        }
      )
      .add(() => {
        this.resetForm();
      });
    //   this.isSubmitting = true; // Reset the "Please wait" message
    //   this.isSubmitted = false;   // Show the message and hide the form
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.number = '';
    this.course = '';
    this.city = '';
  }

  bgImage = [
    {
      img: 'assets/img/register-shape.jpg',
    },
  ];

  ngOnInit(): void {
    // set title
    this.titleService.setTitle(
      'Contact Us for more inquries and Quick response | Teks Academy.'
    );

    // set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Want a Paid Internship and 100% job Support? Contact the Best Online Learning Platform - Teks Academy to Know More.',
    });
  }

  // submit(form){
  //     var name = form.name;
  //     console.log(name);

  //     var email = form.email;
  //     console.log(email);

  //     var number = form.number;
  //     console.log(number);

  //     var message = form.message;
  //     console.log(message);
  // }
}
