import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-branchenquiryform',
  templateUrl: './branchenquiryform.component.html',
  styleUrls: ['./branchenquiryform.component.scss']
})
export class BranchenquiryformComponent implements OnInit {
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  apiUrl = environment.apiUrl;

  efname: string = '';
  efemail: string = '';
  efphone: string = '';
  efcourse: string = '';
  efbranch: string = ''; // Automatically set based on URL
  efcity: string = '';

  branches: { [key: string]: string } = {
    'ameerpet-best-training-institute-full-stack-java-auto-cad/Ameerpet': 'Ameerpet',
    'dilsukhnagar-digitial-marketing-full-stack-java-training/Dilsukhnagar': 'Dilsukhnagar',
    'hitech-best-python-data-science-training-institute/Hitec-City': 'Hitec City',
    'kukatpally-best-data-science-aws-course-training/Kukatpally': 'Kukatpally',
    'secunderabad-sales-force-medical-coding-course-training/Secunderabad': 'Secunderabad',
    'visakhapatnam-best-software-training-institute/Visakhapatnam': 'Visakhapatnam'
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const currentPath = this.router.url.split('/').pop(); // Get the last part of the URL
    if (currentPath && this.branches[currentPath]) {
      this.efbranch = this.branches[currentPath]; // Auto-select the branch name
    } else {
      this.efbranch = ''; // Fallback if no branch is found
    }
  }

  
  resetForm() {
    this.efname = '';
    this.efemail = '';
    this.efphone = '';
    this.efcourse = '';
    this.efbranch = ''; // Reset branch
    this.efcity = '';
  }

  eformData() {
    console.log('Form submitted!');
    const enquiryFormData = {
      efname: this.efname,
      efemail: this.efemail,
      efphone: this.efphone,
      efcourse: this.efcourse,
      efbranch: this.efbranch, // This will now be set correctly
      efcity: this.efcity,
    };

    // Validation checks (same as before)
    // [Validation code here...]

    this.http
      .post(environment.apiUrl + '/websiteleads/enquiry-form-data', enquiryFormData, {
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
