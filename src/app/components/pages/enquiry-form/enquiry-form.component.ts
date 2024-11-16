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
  efbranch: string = ''; // New field for the selected branch

  resetForm() {
    this.efname = '';
    this.efemail = '';
    this.efphone = '';
    this.efcourse = '';
    this.efcity = '';
    this.efbranch = ''; // Reset branch
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
      efbranch: this.efbranch, // Include branch in form data
    };

    if (!this.efname) {
      alert('Name is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.efname)) {
      alert('Invalid Name Format');
      return;
    } else if (!this.efemail) {
      alert('Email is Required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(this.efemail)) {
      alert('Invalid Email Format');
      return;
    } else if (!this.efphone) {
      alert('Phone Number is Required');
      return;
    } else if (!/^\d{10}$/.test(this.efphone)) {
      alert('Invalid Phone Number Format');
      return;
    } else if (!this.efcity) {
      alert('City is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.efcity)) {
      alert('Invalid City Format');
      return;
    } else if (!this.efbranch) {
      alert('Branch is Required');
      return;
    }

    this.http
      .post(environment.apiUrl + '/websiteleads/enquiry-form-data', enquiryFormData, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          this.router.navigate(['/thank-you']);
          this.resetForm();
        },
        (error) => {
          console.error('Error submitting form', error);
        }
      );

    this.resetForm();
  }
}
