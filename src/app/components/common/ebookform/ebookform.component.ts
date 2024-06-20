import { Component } from '@angular/core';
// import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-ebookform',
  templateUrl: './ebookform.component.html',
  styleUrls: ['./ebookform.component.scss'],
})
export class EbookformComponent {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    // Extract the course name from the URL
    this.route.url.subscribe(segments => {
      const path = segments.map(segment => segment.path).join('/');
      // const courseName = segments[segments.length - 1].path;
      if (path.includes('full-stack-python')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Full Stack Python';
      }else if (path.includes('digital-marketing')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Digital Marketing';
      }else if (path.includes('data-science')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Data Science';
      }else if (path.includes('awsplusdevops')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'AWS + DevOps';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'SAP FICO';
      }else if (path.includes('testingtools')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Testing Tools';
      }else if (path.includes('sap-mm')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'SAP MM';
      }else if (path.includes('sap-pp')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'SAP PP';
      }else if (path.includes('sap-sd')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'SAP SD';
      }else if (path.includes('sap-fico')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'SAP FICO';
      }else if (path.includes('full-stack-java')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Full Stack Java';
      }else if (path.includes('bim-building-information-modeling')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'BIM';
      }else if (path.includes('salesforce')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Salesforce';
      }else if (path.includes('ai-and-ml')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'AI and ML';
      }else if (path.includes('manual-testing')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Manual Testing';
      }else if (path.includes('multimedia')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Multi Media';
      }else if (path.includes('medical-coding')) {
        // Set the course name to the ebcourse property
        this.ebcourse = 'Medical Coding';
      }
    });
  }

  ebname: string = '';
  ebmail: string = '';
  ebphone: string = '';
  ebcourse: string = '';
  

  resetForm() {
    this.ebname = '';
    this.ebmail = '';
    this.ebphone = '';
    this.ebcourse = '';
  }

  ebsubmitForm(){
    const ebsubmitForm = {
      ebname: this.ebname,
      ebmail: this.ebmail,
      ebphone: this.ebphone,
      ebcourse: this.ebcourse
    };

    // if(!this.ebname || !this.ebmail || !this.ebphone || !this.ebcourse){
    //   alert('please fill in all required fields');
    //   return;
    // };

    // validations
    if (!this.ebname) {
      console.error('Name is Required');
      alert('Name is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.ebname)) {
      console.error('Invalid Name Format');
      alert('Invalid Name Format');
      return;
    } else if (!this.ebmail) {
      console.error('Email is Required');
      alert('Email is Required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(this.ebmail)) {
      console.error('Invalid Email Format');
      alert('Invalid Email Format');
      return;
    } else if (!this.ebphone) {
      console.error('Phone Number is Required');
      alert('Phone Number is Required');
      return;
    } else if (!/^\d{10}$/.test(this.ebphone)) {
      console.error('Invalid Phone Number Format');
      alert('Invalid Phone Number Format');
      return;
    } else if (!this.ebcourse) {
      console.error('City is Required');
      alert('City is Required');
      return;
    };
    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    // }
    const path = this.route.snapshot.url.map(segment => segment.path).join('/');

    this.http.post(environment.apiUrl + '/ebook', ebsubmitForm, { responseType: 'text' }).subscribe(
      response => {
        
        console.log('form data submitted successfully', response);
        this.resetForm();
        if (path.includes('full-stack-python')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/ebooks/EBook+-+Full+Stack+Python+2.docx'
        }else if (path.includes('digital-marketing')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/ebooks/EBook+-+Digital+Marketing+1.docx'
        }else if (path.includes('data-science')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/ebooks/EBook+-+Data+Science+4.docx'
        }else if (path.includes('awsplusdevops')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/ebooks/EBook+-+AWS+%2B+DevOps+2.docx'
        }else if (path.includes('salesforce')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/ebooks/EBook+-+Salesforce+2.docx'
        }
      },
      error => {
        console.log('error submitting form data', error);
      }
    );
    this.resetForm();
  }

  
// ngOnInit(): void{
//   const dsformclose = document.getElementById("dsformclose")!;
//   const popupForm = document.getElementById("popup-form")!;

//   dsformclose.addEventListener("click", function(){
//     popupForm.style.display = 'none';
//   })

// }
  // ngOnInit(): void {
  //   const ebookForm = document.getElementById('ebook_form') as HTMLFormElement;

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const phoneRegex = /^\d{10}$/;

  //   ebookForm.addEventListener('submit', function (event) {
  //     event.preventDefault();

  //     const name = (
  //       ebookForm.querySelector('#ebook_user_name') as HTMLInputElement
  //     ).value;
  //     const email = (
  //       ebookForm.querySelector('#ebook_user_email') as HTMLInputElement
  //     ).value;
  //     const phone = (
  //       ebookForm.querySelector('#ebook_user_phone') as HTMLInputElement
  //     ).value;

  //     // Check if all fields are filled
  //     if (name && email && phone) {
  //       if (name === '') {
  //         alert('Please enter your name.');
  //       } else if (email === '' || !emailRegex.test(email)) {
  //         alert('Please enter a valid email address.');
  //       } else if (phone === '' || !phoneRegex.test(phone)) {
  //         alert(
  //           'Please enter a 10-digit phone number without spaces or dashes.'
  //         );
  //       } else {
  //         // Process form data and download syllabus
  //         const url =
  //           'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/download-syllabus/Digital+Marketing.pdf';
  //         window.open(url, '_blank');
  //       }
  //     } else {
  //       // One or more required fields are empty
  //       alert('Please fill in all required fields.');
  //       console.log(`Working`);
  //     }
  //   });
  // }
}
