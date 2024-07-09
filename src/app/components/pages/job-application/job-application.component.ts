import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobApplicationService } from 'src/app/service/job-application.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent {
  jobApplicationForm!: FormGroup;

  constructor(private fb: FormBuilder, private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    this.jobApplicationForm = this.fb.group({
      job_posting_id: [8, Validators.required],
      applicant_name: ['', Validators.required],
      applicant_email: ['', [Validators.required, Validators.email]],
      applicant_phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      applicant_location: ['', Validators.required],
      applicant_teksenrollmentid: ['', Validators.required],
      resume: [null, Validators.required] // Ensure resume is initialized correctly
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'application/pdf' || file.type === 'text/csv') {
        this.jobApplicationForm.patchValue({
          resume: file
        });
      } else {
        alert('Please upload a PDF or CSV file.');
      }
    }
  }

  onSubmit() {
    if (this.jobApplicationForm.valid) {
      const formData = new FormData();
      const formValue = this.jobApplicationForm.value;
  
      Object.keys(formValue).forEach(key => {
        formData.append(key, formValue[key]);
      });
  
      // Debugging: Log form data just before submission
      console.log('Form Data:', formData);
  
      this.jobApplicationService.submitApplication(formData).subscribe(
        (response: any) => {
          console.log(response);
          alert('Application submitted successfully!');
        },
        (error: any) => {
          console.error(error);
          alert('There was an error submitting your application. Please try again.');
        }
      );
    } else {
      alert('Please fill all the required fields.');
    }
  }
  
}
