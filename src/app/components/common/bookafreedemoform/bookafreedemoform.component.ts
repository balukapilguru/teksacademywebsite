import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-bookafreedemoform',
  templateUrl: './bookafreedemoform.component.html',
  styleUrls: ['./bookafreedemoform.component.scss']
})
export class BookafreedemoformComponent {
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    // Extract the course name from the URL
    this.route.url.subscribe(segments => {
      const path = segments.map(segment => segment.path).join('/');
      // const courseName = segments[segments.length - 1].path;
      if (path.includes('full-stack-python')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Full Stack Python';
      }else if (path.includes('digital-marketing')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Digital Marketing';
      }else if (path.includes('data-science')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Data Science';
      }else if (path.includes('awsplusdevops')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'AWS + DevOps';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'SAP FICO';
      }else if (path.includes('testingtools')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Testing Tools';
      }else if (path.includes('sap-mm')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'SAP MM';
      }else if (path.includes('sap-pp')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'SAP PP';
      }else if (path.includes('sap-sd')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'SAP SD';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'SAP FICO';
      }else if (path.includes('full-stack-java')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Full Stack Java';
      }else if (path.includes('bim-building-information-modeling')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'BIM';
      }else if (path.includes('salesforce')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Salesforce';
      }else if (path.includes('ai-and-ml')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'AI and ML';
      }else if (path.includes('manual-testing')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Manual Testing';
      }else if (path.includes('multimedia')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Multi Media';
      }else if (path.includes('medical-coding')) {
        // Set the course name to the bfdcourse property
        this.bfdcourse = 'Medical Coding';
      }
    });
  }
  recaptchaValue!: string;
  bfdname: string = '';
  bfdemail: string = '';
  bfdcontactnumber: string = '';
  bfdcourse: string = '';
  bfddatetime: string = '';
  resetForm() {
    this.bfdname = '';
    this.bfdemail = '';
    this.bfdcontactnumber = '';
    this.bfdcourse = '';
    this.bfddatetime = '';
  }
  bookfreedemoformdata() {
    
    const bookfreedemoformdata = {
      bfdname: this.bfdname,
      bfdemail: this.bfdemail,
      bfdcontactnumber: this.bfdcontactnumber,
      bfdcourse: this.bfdcourse,
      bfddatetime: this.bfddatetime,
    };

    // if (
    //   !this.bfdname ||
    //   !this.bfdemail ||
    //   !this.bfdcontactnumber ||
    //   !this.bfdcourse ||
    //   !this.bfddatetime
    // ) {
    //   alert('please fill all required fields');
    //   console.error('please fill all fields');
    //   return;
    // }
    

    if (!this.bfdname) {
      console.error('Name is Required');
      alert('Name is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.bfdname)) {
      console.error('Invalid Name Format');
      alert('Invalid Name Format');
      return;
    } else if (!this.bfdemail) {
      console.error('Email is Required');
      alert('Email is Required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(this.bfdemail)) {
      console.error('Invalid Email Format');
      alert('Invalid Email Format');
      return;
    } else if (!this.bfdcontactnumber) {
      console.error('Phone Number is Required');
      alert('Phone Number is Required');
      return;
    } else if (!/^\d{10}$/.test(this.bfdcontactnumber)) {
      console.error('Invalid Phone Number Format');
      alert('Invalid Phone Number Format');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.bfdcourse)) {
      console.error('Invalid City Format');
      alert('Invalid City Format');
      return;
    }else if (!this.bfddatetime) {
      console.error('Date and Time is Required');
      alert('Date and Time is Required');
      return;
    };

    
    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }

    // 'https://demo.teksacademy.com:3000/enquiry-form-data'
    this.http
      .post(environment.apiUrl + '/bookademo', bookfreedemoformdata, {
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







