import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-enrollnowform',
  templateUrl: './enrollnowform.component.html',
  styleUrls: ['./enrollnowform.component.scss']
})
export class EnrollnowformComponent {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    // Extract the course name from the URL
    this.route.url.subscribe(segments => {
      const path = segments.map(segment => segment.path).join('/');
      // const courseName = segments[segments.length - 1].path;
      if (path.includes('full-stack-python')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Full Stack Python';
      }else if (path.includes('digital-marketing')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Digital Marketing';
      }else if (path.includes('data-science')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Data Science';
      }else if (path.includes('awsplusdevops')) {
        // Set the course name to the efcourse property
        this.efcourse = 'AWS + DevOps';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the efcourse property
        this.efcourse = 'SAP FICO';
      }else if (path.includes('testingtools')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Testing Tools';
      }else if (path.includes('sap-mm')) {
        // Set the course name to the efcourse property
        this.efcourse = 'SAP MM';
      }else if (path.includes('sap-pp')) {
        // Set the course name to the efcourse property
        this.efcourse = 'SAP PP';
      }else if (path.includes('sap-sd')) {
        // Set the course name to the efcourse property
        this.efcourse = 'SAP SD';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the efcourse property
        this.efcourse = 'SAP FICO';
      }else if (path.includes('full-stack-java')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Full Stack Java';
      }else if (path.includes('bim-building-information-modeling')) {
        // Set the course name to the efcourse property
        this.efcourse = 'BIM';
      }else if (path.includes('salesforce')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Salesforce';
      }else if (path.includes('ai-and-ml')) {
        // Set the course name to the efcourse property
        this.efcourse = 'AI and ML';
      }else if (path.includes('manual-testing')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Manual Testing';
      }else if (path.includes('multimedia')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Multi Media';
      }else if (path.includes('medical-coding')) {
        // Set the course name to the efcourse property
        this.efcourse = 'Medical Coding';
      }
    });
  }
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
      console.error('Course is Required');
      alert('Course is Required');
      return;
    }else if (!/^[a-zA-Z\s]+$/.test(this.efcity)) {
      console.error('City is Required');
      alert('City is Required');
      return;
    }

    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }

    // 'https://demo.teksacademy.com:3000/enquiry-form-data'
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
