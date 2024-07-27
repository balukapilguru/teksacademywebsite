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
  recaptchaValue!: string;
  efname: string = '';
  efemail: string = '';
  efphone: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  resetForm() {
    this.efname = '';
    this.efemail = '';
    this.efphone = '';
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
      efname: this.efname,
      efemail: this.efemail,
      efphone: this.efphone,
    };

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
    }

    this.http
      .post(this.apiUrl + '/enquiry-form-data', enquiryFormData, {
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
  }


}
