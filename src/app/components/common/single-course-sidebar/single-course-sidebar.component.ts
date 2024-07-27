import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-course-sidebar',
  templateUrl: './single-course-sidebar.component.html',
  styleUrls: ['./single-course-sidebar.component.scss']
})
export class SingleCourseSidebarComponent {
  apiUrl = environment.apiUrl;
  recaptchaValue!: string;
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  currentUrl: string = window.location.pathname;
  displayValue: string = '';

  constructor(private http: HttpClient, private router: Router){
    if(this.currentUrl.includes('courses/nodejs')){
      this.displayValue = 'Node.js';
    }else if(this.currentUrl.includes('courses/ms-office')){
      this.displayValue = 'MS Office';
    }else if(this.currentUrl.includes('courses/staad-pro')){
      this.displayValue = 'Staadpro';
    }else if(this.currentUrl.includes('courses/primavera')){
      this.displayValue = 'primavera';
    }else if(this.currentUrl.includes('courses/angular')){
      this.displayValue = 'Angular';
    }else if(this.currentUrl.includes('courses/full-stack-java')){
      this.displayValue = 'Full Stack Java';
    }else if(this.currentUrl.includes('courses/revit-structure')){
      this.displayValue = 'Revit Structure';
    }else if(this.currentUrl.includes('courses/c-2')){
      this.displayValue = 'C#';
    }else if(this.currentUrl.includes('courses/vbamacros')){
      this.displayValue = 'VBA MACROS';
    }else if(this.currentUrl.includes('courses/pte')){
      this.displayValue = 'pte';
    }else if(this.currentUrl.includes('courses/manual-testing')){
      this.displayValue = 'Manual Testing';
    }else if(this.currentUrl.includes('courses/html-css')){
      this.displayValue = 'HTML CSS';
    }else if(this.currentUrl.includes('courses/artificial-intelligence')){
      this.displayValue = 'Artificial Intelligence';
    }else if(this.currentUrl.includes('courses/automation-testing')){
      this.displayValue = 'Automation Testing';
    }else if(this.currentUrl.includes('courses/bim-course')){
      this.displayValue = 'BIM';
    }else if(this.currentUrl.includes('courses/sketching')){
      this.displayValue = 'Sketching';
    }else if(this.currentUrl.includes('courses/devops')){
      this.displayValue = 'Devops';
    }else if(this.currentUrl.includes('courses/revit-mep')){
      this.displayValue = 'Revit Mep';
    }else if(this.currentUrl.includes('courses/c')){
      this.displayValue = 'C';
    }else if(this.currentUrl.includes('courses/c-language')){
      this.displayValue = 'C Language';
    }else if(this.currentUrl.includes('courses/python-developer')){
      this.displayValue = 'Python Developer';
    }else if(this.currentUrl.includes('courses/autocad')){
      this.displayValue = 'autoCad';
    }else if(this.currentUrl.includes('courses/revit')){
      this.displayValue = 'Revit';
    }else if(this.currentUrl.includes('courses/sql')){
      this.displayValue = 'SQL';
    }else if(this.currentUrl.includes('courses/power-bi')){
      this.displayValue = 'Power-Bi';
    }else if(this.currentUrl.includes('courses/tableau')){
      this.displayValue = 'Tabeau';
    }else if(this.currentUrl.includes('courses/business-analytics')){
      this.displayValue = 'Business Analytics';
    }else if(this.currentUrl.includes('courses/microsoft-azure')){
      this.displayValue = 'Microsoft Azure';
    }else if(this.currentUrl.includes('courses/ielts')){
      this.displayValue = 'IELTS';
    }else if(this.currentUrl.includes('courses/advance-excel')){
      this.displayValue = "Advanced Excel";
    }else if(this.currentUrl.includes('courses/pgdca')){
      this.displayValue = 'PGDCA';
    }else if(this.currentUrl.includes('courses/salesforce-course')){
      this.displayValue = 'Salesforce';
    }else if(this.currentUrl.includes('courses/digital-marketing')){
      this.displayValue = 'Digital Marketing';
    }else if(this.currentUrl.includes('courses/aws')){
      this.displayValue = 'AWS';
    }else if(this.currentUrl.includes('courses/data-analytics')){
      this.displayValue = 'Data Analytics';
    }else if(this.currentUrl.includes('courses/hvac')){
      this.displayValue = 'HVAC';
    }else if(this.currentUrl.includes('courses/3ds-max-2')){
      this.displayValue = '3ds max';
    }else if(this.currentUrl.includes('courses/full-stack-python')){
      this.displayValue = 'Full Stack Python';
    }else if(this.currentUrl.includes('courses/data-science')){
      this.displayValue = 'Data Science';
    }else if(this.currentUrl.includes('courses/data-analytics')){
      this.displayValue = 'Data Analytics';
    }
  }

  scname: string = '';
  scemail: string = '';
  sccontactnumber: string = '';
  sccourse: string = "";

  
  
  resetForm(){
    this.scname = '';
    this.scemail = '';
    this.sccontactnumber = '';
    this.sccourse = ''
}


  scFormSubmit(){
    const scformdata = {
      scname: this.scname,
      scemail: this.scemail,
      sccontactnumber: this.sccontactnumber,
      sccourse: this.sccourse
    };

    if(!this.scname || !this.scemail || !this.sccontactnumber || !this.sccourse){
      alert('please fill all required fields');
      console.error("please fill all fields");
      return;
    }
    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }
  
    this.http.post(environment.apiUrl + '/websiteleads/scform-data', scformdata, { responseType: "text"}).subscribe(
      response => {
        console.log("form submited successfully", response);
        this.router.navigate(['/thank-you']);
        this.resetForm();
      },
      error => {
        console.error("error form submit", error);
      }
    )
    
    this.resetForm();
    
  }
  


}
