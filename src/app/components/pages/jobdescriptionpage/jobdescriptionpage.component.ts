import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-jobdescriptionpage',
  templateUrl: './jobdescriptionpage.component.html',
  styleUrls: ['./jobdescriptionpage.component.scss']
})
export class JobdescriptionpageComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;

  form: FormGroup;
  formSubmitted: boolean = false;
  modal: bootstrap.Modal | null = null;
  thankYouModal: bootstrap.Modal | null = null;
  apiUrl = environment.apiUrl;
  jobId: string | null = null;
  jobDetails: any;
  isLoading = true;
  fileErrorMessage: string | null = null;
 
  imagePath: string = 'https://teksacademy.s3.ap-south-1.amazonaws.com/HRM/jobposting_companylogos/';
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      location: ['', Validators.required],
      enrollmentId: [''],
      file: [null, Validators.required] 
    });
  }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');
    console.log('Job ID:', this.jobId); // Log the job ID for debugging
    if (this.jobId) {
      this.fetchJobDetails(this.jobId);
    } else {
      this.isLoading = false;
      console.error('Job ID is null or undefined');
    }
  }


  fetchJobDetails(id: string) {
    this.http.get<any>(`${this.apiUrl}/jobs/job-posting/${id}`).subscribe(
      (response) => {
        this.jobDetails = response.jobPosting; 
        console.log('Fetched job details:', this.jobDetails);
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        if (error.status === 404) {
          console.error('Job not found:', error);
        } else {
          console.error('Error fetching job details:', error);
        }
      }
    );
  }

  updateUrl() {
    if (this.jobDetails) {
      const companyName = this.jobDetails.company_name.replace(/\s+/g, '-').toLowerCase();
      const jobTitle = this.jobDetails.title.replace(/\s+/g, '-').toLowerCase();
      this.router.navigateByUrl(`/${this.jobId}/${companyName}/${jobTitle}`);
    }
  }

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    this.fileErrorMessage = null;

    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (['pdf', 'doc', 'docx'].includes(fileExtension)) {
        this.form.patchValue({ file });
        this.form.get('file')?.setErrors(null);
      } else {
        this.form.patchValue({ file: null });
        this.form.get('file')?.setErrors({ fileType: true });
        this.fileErrorMessage = 'Please provide PDF and Doc files only';
      }
    }
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.valid) {
      const formData = new FormData();
      formData.append('job_posting_id', this.jobId || ''); // Use the actual job ID
      formData.append('applicant_name', this.form.get('name')?.value || '');
      formData.append('applicant_email', this.form.get('email')?.value || '');
      formData.append('applicant_phone', this.form.get('contactNumber')?.value || '');
      formData.append('applicant_location', this.form.get('location')?.value || '');
      formData.append('applicant_teksenrollmentid', this.form.get('enrollmentId')?.value || '');

      const resumeFile = this.form.get('file')?.value;
      if (resumeFile instanceof File) {
        formData.append('resume', resumeFile, resumeFile.name);
      }

      // Log each field for debugging
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      this.http.post(this.apiUrl + '/jobs/apply', formData, { responseType: 'text' }).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          this.router.navigate(['/thankyoupage']);
      
          setTimeout(() => {
            this.router.navigate(['/jobs']).then(() => {
              window.location.reload(); // Refresh the page after navigation
            });
          }, 2000); // Navigate back to job application page after 3 seconds  
        
        },
        (error: HttpErrorResponse) => {
          console.error('Error submitting form', error);
          if (error.status === 500) {
            console.error('Internal server error:', error.error);
          } else {
            console.error('Unexpected error:', error.message);
          }
        }
      );
    }
  }

  resetForm() {
    this.form.reset();
    this.formSubmitted = false;
    this.fileErrorMessage = null;

    if (this.fileInput) {
      // Reset the file input element
      this.fileInput.nativeElement.value = '';
    }
  }
}
