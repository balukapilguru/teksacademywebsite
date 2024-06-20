import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pgp',
  templateUrl: './pgp.component.html',
  styleUrls: ['./pgp.component.scss'],
  
})
export class PgpComponent {
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  constructor(private http: HttpClient, private router: Router){}
    
    recaptchaValue!: string;
    name: string = '';
    email: string = '';
    number: string = '';
    course: string = '';
    city: string = '';
    

    
    cformSubmit(){

        
        const cformData = {
            name: this.name,
            email: this.email,
            number: this.number,
            course: this.course,
            city: this.city
        };

        if(!this.name || !this.email || !this.number || !this.course || !this.city){
            alert('please fill all required fields');
            console.error("please fill all required fields");
            return;
        }
        if(!this.recaptchaValue){
            alert('Please complete the reCAPTCHA.');
            return;
        }

        this.http.post('https://demo.teksacademy.com:3000/contactpage-form-data', cformData, { responseType: 'text'}).subscribe(
            response => {
                console.log("form data submited successfully", response);
                this.router.navigate(['/thank-you'])
                // this.resetForm();
            },
            error => {
                console.log("error submit form data", error);
            }
        );
        
    }
}
