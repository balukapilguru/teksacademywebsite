import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss'],
})
export class EnquiryFormComponent {
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) {}

  recaptchaValue!: string;
  efname: string = '';
  efemail: string = '';
  efphone: string = '';
  efcourse: string = '';
  efcity: string = '';
  resetForm() {
    this.efname = '';
    this.efemail = '';
    this.efphone = '';
    this.efcourse = '';
    this.efcity = '';
  }

  ngOnInit() {
    $('.user_number').keydown(function (event) {
      if (event.keyCode === 38 || event.keyCode === 40) {
        // Up or down arrow key
        event.preventDefault(); // Prevent default behavior
      }
    });
  }

  eformData() {
    const enquiryFormData = {
      efname: this.efname,
      efemail: this.efemail,
      efphone: this.efphone,
      efcourse: this.efcourse,
      efcity: this.efcity,
    };

    // if (
    //   !this.efname ||
    //   !this.efemail ||
    //   !this.efphone ||
    //   !this.efcourse ||
    //   !this.efcity
    // ) {
    //   alert('please fill all required fields');
    //   console.error('please fill all fields');
    //   return;
    // }
    // validations
    

    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }
    if (!this.efname) {
      console.error('Name is Required');
      alert('Name is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.efname)) {
      console.error('Invalid Name Format');
      alert('Invalid Name Format');
      return;
    } else if (!this.efemail) {
      console.error('Email is Required');
      alert('Email is Required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(this.efemail)) {
      console.error('Invalid Email Format');
      alert('Invalid Email Format');
      return;
    } else if (!this.efphone) {
      console.error('Phone Number is Required');
      alert('Phone Number is Required');
      return;
    } else if (!/^\d{10}$/.test(this.efphone)) {
      console.error('Invalid Phone Number Format');
      alert('Invalid Phone Number Format');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.efcourse)) {
      console.error('Invalid City Format');
      alert('Invalid City Format');
      return;
    }else if (!this.efcity) {
      console.error('City is Required');
      alert('City is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.efcity)) {
      console.error('Invalid City Format');
      alert('Invalid City Format');
      return;
    };

    
    this.http
      .post(environment.apiUrl + '/websiteleads/enquiry-form-data', enquiryFormData, {
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
}
