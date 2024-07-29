import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.scss']
})
export class FranchiseComponent implements OnInit {
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) {}

  recaptchaValue!: string;
  name: string = '';
  email: string = '';
  phone: string = '';
  location:string='';



  resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.location = '';
  }

  ngOnInit() {
    const userNumberElements = document.getElementsByClassName('user_number');
    for (let i = 0; i < userNumberElements.length; i++) {
      const element = userNumberElements[i];
      element.addEventListener('keydown', (event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.keyCode === 38 || keyboardEvent.keyCode === 40) {
          keyboardEvent.preventDefault(); // Prevent default behavior
        }
      });
    }
  }
  

  eformData() {
    const enquiryFormData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      location:this.location,
    };

    if (!this.name) {
      console.error('Name is Required');
      alert('Name is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.name)) {
      console.error('Invalid Name Format');
      alert('Invalid Name Format');
      return;
    } else if (!this.email) {
      console.error('Email is Required');
      alert('Email is Required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(this.email)) {
      console.error('Invalid Email Format');
      alert('Invalid Email Format');
      return;
    } else if (!this.phone) {
      console.error('Phone Number is Required');
      alert('Phone Number is Required');
      return;
    } else if (!/^\d{10}$/.test(this.phone)) {
      console.error('Invalid Phone Number Format');
      alert('Invalid Phone Number Format');
      return;
    }else if (!this.location) {
      console.error('Location is Required');
      alert('Location is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.location)) {
      console.error('Location is text Format');
      alert('Location is text Format');
      return;
    }

    this.http
      .post(this.apiUrl + '/websiteleads/franchiseform', enquiryFormData, {
        headers: { 'Content-Type': 'application/json' },
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
      console.log('ddd:', enquiryFormData);
  }


}
