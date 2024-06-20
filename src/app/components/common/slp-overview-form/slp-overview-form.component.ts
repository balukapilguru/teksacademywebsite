import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slp-overview-form',
  templateUrl: './slp-overview-form.component.html',
  styleUrls: ['./slp-overview-form.component.scss']
})
export class SlpOverviewFormComponent {
  recaptchaValue!: string;
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  currentUrl: string = window.location.pathname;
  displyValue: string = '';
  

  
  constructor (private http: HttpClient, private router: Router){
    if(this.currentUrl.includes('post-graduate-diploma')){
      this.displyValue = "PGDCA";
    }else if(this.currentUrl.includes('c-language-self-learning-program')){
      this.displyValue = "C language";
    }else if(this.currentUrl.includes('bim-self-learning-program')){
      this.displyValue = 'BIM';
    }else if(this.currentUrl.includes('spoken-english-self-learning-program')){
      this.displyValue = "SPOKEN ENGLISH";
    }else if(this.currentUrl.includes('autocad-self-learning-program')){
      this.displyValue = 'AUTOCAD';
    }else if(this.currentUrl.includes('3ds-max-self-learning-program')){
      this.displyValue = "3ds max";
    }else if(this.currentUrl.includes('ielts-international-english-language-testing-system-self-learning-program')){
      this.displyValue = 'IELTS';
    }else if(this.currentUrl.includes('revit-mep-self-learning-program')){
      this.displyValue = "REVIT MEP";
    }else if(this.currentUrl.includes('front-end-development-self-learning-program')){
      this.displyValue = 'FRONT END DEVELOPMENT';
    }else if(this.currentUrl.includes('data-science-self-learning-program')){
      this.displyValue = "DATA SCIENCE";
    }else if(this.currentUrl.includes('digital-marketing-self-learning-program')){
      this.displyValue = 'DIGITAL MARKETING';
    }
  }
  
  slpname: string = '';
  slpcontactnumber: string = '';
  slpemail: string = '';
  slpcourse: string = '';
  resetForm(){
    this.slpname = '';
    this.slpcontactnumber = '';
    this.slpemail = '';
    this.slpcourse = ''
  }
  slpsubmitForm(){
    const slpformData = {
      slpname: this.slpname,
      slpcontactnumber: this.slpcontactnumber,
      slpemail: this.slpemail,
      slpcourse: this.slpcourse
    };

    if(!this.slpname || !this.slpcontactnumber || !this.slpemail || !this.slpcourse){
      alert('please fill all required fields');
      console.error("please fill all fields");
      return;
    }

    // if(!this.recaptchaValue){
    //   alert('Please complete the reCAPTCHA.');
    //   return;
    // }
    

    this.http.post('https://demo.teksacademy.com:3000/slpform-data', slpformData, { responseType: 'text' }).subscribe(
      response => {
        console.log('form data submited succesfully', response);
        this.router.navigate(['/thank-you']);
        this.resetForm();
      },
      error => {
        console.log('error submitting form data', error)
      }
    )
    
    this.resetForm();
  }

  

  
  
}
