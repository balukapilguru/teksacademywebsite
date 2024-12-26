import { Component } from '@angular/core';
// import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dsform',
  templateUrl: './dsform.component.html',
  styleUrls: ['./dsform.component.scss']
})
export class DsformComponent {
  // recaptchaValue!: string;
  // siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  // currenturl: string = '';

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  dname: string = '';
  demail: string = '';
  dphone: string = '';
  dcity: string = '';

  resetForm() {
    this.dname = '';
    this.demail = '';
    this.dphone = '';
    this.dcity = '';
  }

  dssubmitForm() {
    const formData = {
      dname: this.dname,
      demail: this.demail,
      dphone: this.dphone,
      dcity: this.dcity
    };

    // if(!this.dname || !this.demail || !this.dphone || !this.dcity){
    //   console.error('please fill in all required fields');
    //   alert('please fill in all required fields')
    //   return;
    // };

    // validations
    if (!this.dname) {
      console.error('Name is Required');
      alert('Name is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.dname)) {
      console.error('Invalid Name Format');
      alert('Invalid Name Format');
      return;
    } else if (!this.demail) {
      console.error('Email is Required');
      alert('Email is Required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(this.demail)) {
      console.error('Invalid Email Format');
      alert('Invalid Email Format');
      return;
    } else if (!this.dphone) {
      console.error('Phone Number is Required');
      alert('Phone Number is Required');
      return;
    } else if (!/^\d{10}$/.test(this.dphone)) {
      console.error('Invalid Phone Number Format');
      alert('Invalid Phone Number Format');
      return;
    } else if (!this.dcity) {
      console.error('City is Required');
      alert('City is Required');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(this.dcity)) {
      console.error('Invalid City Format');
      alert('Invalid City Format');
      return;
    };


    const path = this.route.snapshot.url.map(segment => segment.path).join('/');

    this.http.post(environment.apiUrl + '/websiteleads/form-data', formData, { responseType: 'text' }).subscribe(
      response => {

        console.log('form data submitted successfully', response);
        this.resetForm();
        if (path.includes('full-stack-python')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Full+Stack+Python+Syllabus..pdf'
        } else if (path.includes('full-stack-java')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Full+Stack+Java+Syllubus.pdf'
        } else if (path.includes('digital-marketing')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Digital+Marketing.pdf'
        } else if (path.includes('data-science')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Data+Science+Syllabus.pdf'
        } else if (path.includes('sap-fico')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/SAP+FICO+Syllabus.pdf'
        } else if (path.includes('sap-mm')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/SAP+MM.pdf'
        } else if (path.includes('sap-pp')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/SAP+PP.pdf'
        } else if (path.includes('sap-sd')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/SAP+SD.pdf'
        } else if (path.includes('awsplusdevops')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Teks+AWS+%26+DevOps+Syllabus+-+QR+(1).pdf'
        } else if (path.includes('testingtools')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/TESTING+Tools.pdf'
        } else if (path.includes('bim-building-information-modeling')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/BIM+(REVIT+CIVIL%2C+REVIT+MEP+%26+NAVIS+WORKS).pdf'
        } else if (path.includes('salesforce')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Salesforce.pdf'
        } else if (path.includes('ai-and-ml')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/ARTIFICIAL+INTELLIGENCE+.pdf'
        } else if (path.includes('manual-testing')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Manual+Testing.pdf'
        } else if (path.includes('nodejs-course')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Node.js.pdf'
        }

        // new
        else if (path.includes('hvac-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/HVAC.pdf'
        } else if (path.includes('best-3ds-max-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/3DS+MAX.pdf'
        } else if (path.includes('best-ms-office-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/MS+Office+Syllabus.pdf'
        } else if (path.includes('best-staad-pro-civil-engineering-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/STAAD.PRO+.pdf'
        } else if (path.includes('best-primavera-p6-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/primavera.pdf'
        } else if (path.includes('best-angular-javascript-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Angular.pdf'
        } else if (path.includes('best-pte-academic-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/PTE.pdf'
        } else if (path.includes('best-html-css-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/HTML+%26+CSS+Syllabus.pdf'
        } else if (path.includes('best-artificial-intelligence-best-ai-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/ARTIFICIAL+INTELLIGENCE+.pdf'
        } else if (path.includes('best-automation-testing-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/AUTOMATION+TESTING.pdf'
        } else if (path.includes('best-sketching-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/SKETCHUP++.pdf'
        } else if (path.includes('best-devops-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/DevOps+.pdf'
        } else if (path.includes('best-revit-mep-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/REVIT+MEP+(MECHANICAL+%26+ELECTRICAL).pdf'
        } else if (path.includes('best-c-language-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/C+language.pdf'
        } else if (path.includes('best-python-developer-programming-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/PYTHON.pdf'
        } else if (path.includes('best-autocad-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/AUTOCAD.pdf'
        } else if (path.includes('best-revit-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/REVIT+ARCHITECTURE.pdf'
        } else if (path.includes('best-sql-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/SQL+Syllabus+(4).pdf'
        } else if (path.includes('best-power-bi-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Powerbi+Syllabus.pdf'
        } else if (path.includes('best-tableau-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Tableau.pdf'
        } else if (path.includes('best-business-analytics-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Business+Analyst.pdf'
        } else if (path.includes('best-microsoft-azure-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/AZURE.pdf'
        } else if (path.includes('best-ielts-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/IELTS+.pdf'
        } else if (path.includes('best-advance-excel-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Advanced+Excel.pdf'
        } else if (path.includes('best-pgdca-post-graduate-diploma-in-computer-application-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/PGDCA+Syllabus.pdf'
        } else if (path.includes('best-aws-amazon-web-services-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/AMAZON+WEB+SERVICES.pdf'
        } else if (path.includes('best-data-analytics-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Data+Analytics+Syllabus+(1).pdf'
        } else if (path.includes('best-revit-structure-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/REVIT+STRUCTURE.pdf'
        } else if (path.includes('best-c-2-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/C%2B%2B+Syllabus.pdf'
        } else if (path.includes('best-vbamacros-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/VBAMACROS.pdf'
        }
        else if (path.includes('best-medical-coding-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Medical+Coding+(1).pdf'
        }
        else if (path.includes('best-multimedia-course-training-institute')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/Multimedia.pdf'
        }
        else if (path.includes('best-vlsi-course-training-institute-hyderabad')) {
          // Set the course name to the ebcourse property
          window.location.href = 'https://teksacademy.s3.ap-south-1.amazonaws.com/studentManagement/download-syllabus/VLSI+Design+Verification+IE+P+1.pdf'
        }

      },
      error => {
        console.log('error submitting form data', error);
      }
    );
    // this.resetForm();
  }



  ngOnInit(): void {
    const dsformclose = document.getElementById("dsformclose")!;
    const popupForm = document.getElementById("popup-form")!;

    dsformclose.addEventListener("click", function () {
      popupForm.style.display = 'none';
    })

  }



}
