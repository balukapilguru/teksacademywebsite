import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-single-course-form',
  templateUrl: './single-course-form.component.html',
  styleUrls: ['./single-course-form.component.scss'],
})
export class SingleCourseFormComponent {
  recaptchaValue!: string;
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  // displayValue: string = '';

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Extract the course name from the URL
    this.route.url.subscribe(segments => {
      const path = segments.map(segment => segment.path).join('/');
      // const courseName = segments[segments.length - 1].path;
      if (path.includes('full-stack-python')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Full Stack Python';
      }else if (path.includes('digital-marketing')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Digital Marketing';
      }else if (path.includes('data-science')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Data Science';
      }else if (path.includes('awsplusdevops')) {
        // Set the course name to the sccourse property
        this.sccourse = 'AWS + DevOps';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the sccourse property
        this.sccourse = 'SAP FICO';
      }else if (path.includes('testingtools')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Testing Tools';
      }else if (path.includes('sap-mm')) {
        // Set the course name to the sccourse property
        this.sccourse = 'SAP MM';
      }else if (path.includes('sap-pp')) {
        // Set the course name to the sccourse property
        this.sccourse = 'SAP PP';
      }else if (path.includes('sap-sd')) {
        // Set the course name to the sccourse property
        this.sccourse = 'SAP SD';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the sccourse property
        this.sccourse = 'SAP FICO';
      }else if (path.includes('full-stack-java')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Full Stack Java';
      }else if (path.includes('bim-building-information-modeling')) {
        // Set the course name to the sccourse property
        this.sccourse = 'BIM';
      }else if (path.includes('salesforce')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Salesforce';
      }else if (path.includes('ai-and-ml')) {
        // Set the course name to the sccourse property
        this.sccourse = 'AI and ML';
      }else if (path.includes('manual-testing')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Manual Testing';
      }else if (path.includes('multimedia')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Multi Media';
      }else if (path.includes('medical-coding')) {
        // Set the course name to the sccourse property
        this.sccourse = 'Medical Coding';
      }
    });
  }

  scname: string = '';
  scemail: string = '';
  sccontactnumber: string = '';
  sccourse: string = '';

  resetForm() {
    this.scname = '';
    this.scemail = '';
    this.sccontactnumber = '';
    this.sccourse = '';
  }


  scFormSubmit() {
    const scformdata = {
      scname: this.scname,
      scemail: this.scemail,
      sccontactnumber: this.sccontactnumber,
      sccourse: this.sccourse,
    };



    // if (
    //   !this.scname ||
    //   !this.scemail ||
    //   !this.sccontactnumber ||
    //   !this.sccourse
    // ) {
    //   alert('please fill all required fields');
    //   console.error('please fill all fields');
    //   return;
    // }
    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }


      // validations
      if (!this.scname) {
        console.error('Name is Required');
        alert('Name is Required');
        return;
      } else if (!/^[a-zA-Z\s]+$/.test(this.scname)) {
        console.error('Invalid Name Format');
        alert('Invalid Name Format');
        return;
      } else if (!this.scemail) {
        console.error('Email is Required');
        alert('Email is Required');
        return;
      } else if (!/\S+@\S+\.\S+/.test(this.scemail)) {
        console.error('Invalid Email Format');
        alert('Invalid Email Format');
        return;
      } else if (!this.sccontactnumber) {
        console.error('Phone Number is Required');
        alert('Phone Number is Required');
        return;
      } else if (!/^\d{10}$/.test(this.sccontactnumber)) {
        console.error('Invalid Phone Number Format');
        alert('Invalid Phone Number Format');
        return;
      } else if (!this.sccourse) {
        console.error('City is Required');
        alert('City is Required');
        return;
      } else if (!/^[a-zA-Z\s]+$/.test(this.sccourse)) {
        console.error('Invalid City Format');
        alert('Invalid City Format');
        return;
      };


      this.http.post(environment.apiUrl + '/websiteleads/scform-data', scformdata, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('form submited successfully', response);
          this.router.navigate(['/thank-you']);
          this.resetForm();
        },
        (error) => {
          console.error('error form submit', error);
        }
      );

    this.resetForm();
  }
}
