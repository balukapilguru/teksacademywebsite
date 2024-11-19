import { Component, ElementRef, OnInit, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vizag',
  templateUrl: './vizag.component.html',
  styleUrls: ['./vizag.component.scss']
})
export class VizagComponent {
  efname = '';
  efemail = '';
  efphone = '';
  efcourse = '';
  efbranch = 'visakhapatnam';
  efcity = '';
  apiUrl = environment.apiUrl;


 branches: { [key: string]: string } = {
    dilsukhnagar: 'Dilsukhnagar',
    ameerpet: 'Ameerpet',
    hiteccity: 'Hiteccity',
    kukatpally: 'Kukatpally',
    secunderabad: 'Secunderabad',
    visakhapatnam: 'Visakhapatnam'
  };
  
  constructor(
    private route: ActivatedRoute, private http: HttpClient, private router: Router
  ){}
  ngOnInit(): void {
    // const currentPath = this.router.url.split('/').pop() as keyof typeof this.branches; // Type assertion

    // if (currentPath && this.branches[currentPath]) {
    //   this.efbranch = this.branches[currentPath];
    // } else {
    //   this.efbranch = ''; // Fallback if no branch is found
    // }
  }

  
 resetForm() {
  this.efname = '';
  this.efemail = '';
  this.efphone = '';
  this.efcourse = '';
  this.efbranch = '';
  this.efcity = '';
}

eformData() {
  const enquiryFormData = {
    efname: this.efname,
    efemail: this.efemail,
    efphone: this.efphone,
    efcourse: this.efcourse,
    efbranch: this.efbranch,
    efcity: this.efcity
  };

  this.http.post(this.apiUrl + '/websiteleads/enquiry-form-data', enquiryFormData, {
    responseType: 'text'
  }).subscribe(
    () => {
      this.router.navigate(['/thank-you']);
      this.resetForm();
    },
    error => console.error('Error submitting form', error)
  );
}
}
