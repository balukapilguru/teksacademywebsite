import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss']
})
export class TestingFormComponent {
  nname: string = '';
  nemail: string = '';
  nphone: string = '';
  ncity: string = '';

  constructor(private http: HttpClient) { }

  submitForm() {
    const formData = {
      nname: this.nname,
      nemail: this.nemail,
      nphone: this.nphone,
      ncity: this.ncity
    };

    if (!this.nname || !this.nemail || !this.nphone || !this.ncity) {
      console.error('Please fill in all required fields');
      return;
    }
    
    this.http.post('http://localhost:3000/form-data', formData).subscribe(
      response => {
        console.log('Form data submitted successfully:', response);
        // Handle the response from the PHP script if needed
      },
      error => {
        console.error('Error submitting form data:', error);
        // Handle the error if needed
      }
    );
  }
}
