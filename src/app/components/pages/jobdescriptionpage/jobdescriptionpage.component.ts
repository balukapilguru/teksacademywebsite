import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { JobPosting } from 'src/app/Model/jobposting';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-jobdescriptionpage',
  templateUrl: './jobdescriptionpage.component.html',
  styleUrls: ['./jobdescriptionpage.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 100ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class JobdescriptionpageComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;
  job: any;
  form: FormGroup;
  formSubmitted: boolean = false;
  modal: bootstrap.Modal | null = null;
  thankYouModal: bootstrap.Modal | null = null;
  apiUrl = environment.apiUrl;
  jobId: string | null = null;
  jobDetails: any;
  isLoading = true;
  fileErrorMessage: string | null = null;
  copied: boolean = false;
  imagePath: string =
    'https://teksacademy.s3.ap-south-1.amazonaws.com/HRM/jobposting_companylogos/';
  encodedShareUrl: string | undefined;
  shareUrl: string | undefined;
  studentDetails: any;
  studentRegistrationNumber: any;
  fileUploadErrorMessage: string | null = null;
  validateRegistrationNumber : any
  additionalFields: boolean = false;
  applyButtonDisabled: boolean = false;
  enrollmentIdError: string | null = null;
  isDisabled: boolean = true;
  todayDate: Date = new Date();
  lastUploadedResume: string = '';
  resume : any;





  

  

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
      enrollmentId: ['', Validators.required],
      file: [null, Validators.required],
      highestqualification: ['', Validators.required],
      stream: ['', Validators.required],
      percentage: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      twelfth: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      tenth: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    });
  }

  newFields = [
    { id: 'highestqualification', placeholder: 'Enter highest qualification' },
    { id: 'stream', placeholder: 'Stream' },
    { id: 'percentage', placeholder: 'Percentage',  type:"number", value: ""},
    { id: 'twelfth', placeholder: '12th Percentage',  type:"number"},
    { id: 'tenth', placeholder: '10th Percentage'  , type:"number"},
    { id: 'location', placeholder: 'Enter Current Location', },
    { id: 'file', placeholder: 'Resume', type: 'file' }
  ];

  ngOnInit(): void {
    this.validateRegistrationNumber = "is-invalid";
    this.shareUrl = window.location.href;
    this.jobId = this.route.snapshot.paramMap.get('id');
    console.log('Job ID:', this.jobId); // Log the job ID for debugging
    if (this.jobId) {
      this.fetchJobDetails(this.jobId);
    } else {
      this.isLoading = false;
      console.error('Job ID is null or undefined');
    }
  }

  onNumberInput(event: Event, field: any): void {
    if (field.placeholder==="percentage" || field.placeholder==="twelfth" || field.placeholder==="tenth"){
      const input = event.target as HTMLInputElement;
    // Check if the input is a valid integer
    const regex = /^[0-9]*$/;  // Only numbers (0-9)
    
    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^0-9]/g, '');  // Remove any non-integer characters
    }

    // Optionally, you can update the value back in the array (e.g., update 'field.value')
    field.value = input.value;
    }
    
  }

  fetchJobDetails(id: string) {
    this.http.get<any>(`${this.apiUrl}/jobs/job-posting/${id}`).subscribe(
      (response) => {
        this.jobDetails = response.jobPosting;
        this.isLoading = false;
        console.log('Fetched job details:', this.jobDetails);
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        console.error('Error fetching job details:', error);
      }
    );
  }

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;  // Toggle disabled state
  }

  downloadCV(fileUrl: string) {
    const baseURL = "https://teksacademy.s3.ap-south-1.amazonaws.com/HRM/Applicants_CV/";
    if (fileUrl) {
      const fullURL = baseURL + fileUrl; // Concatenate the base URL with the fileUrl
      const link = document.createElement("a");
      link.href = fullURL;
      link.download = fileUrl; // Use the fileUrl as the filename
      link.target = '_blank'; // Open the download in a new tab
      link.style.display = 'none'; // Hide the link element
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("CV is not Available");
    }
  }
  

  fetchStudentDetails(event: any) {
    if (event.target.value.length >= 10) {
      this.validateRegistrationNumber = "is-invalid";
      this.studentRegistrationNumber = { number: event.target.value };
  
      const apiUrlWithParams = `${this.apiUrl}/jobs/chech_jobapply/${this.studentRegistrationNumber.number}/${this.jobId}`;
  
      this.http.get<any>(apiUrlWithParams).subscribe(
        (response) => {
          let index = response.students.length - 1;
          if (index < 0) {
            index = 0; // Default to the first student if no data exists
          }
          this.enrollmentIdError = null;
          console.log('Fetched student data:', response);  // Add this log to see the response
          this.studentDetails = response;  // Store student details
          this.prepopulateForm(response);  // Ensure the form gets prepopulated
          this.resume = response ? response?.students[index]?.resume : null
          this.validateRegistrationNumber = "is-valid";
        },
        (error: HttpErrorResponse) => {
          this.enrollmentIdError = error?.error?.message || 'Please Enter Valid Enrollment ID.'

          if (error.status === 400) {
            console.log('Bad Request - Invalid data provided');
          } else {
            this.validateRegistrationNumber = "is-invalid";
          }
          console.log("validateRegistrationNumber", this.validateRegistrationNumber);
        }
      );
    }
  }
  

  isResumeValid() {
    if (!this.resume && !this.lastUploadedResume) {
      this.fileUploadErrorMessage = 'Please upload a resume or use your last uploaded resume.';
      return false;
    }
    return true;
  }
  
  

  prepopulateForm(data: any) {
    let index = data.students.length - 1;
    if (index < 0) {
      index = 0; // Default to the first student if no data exists
    }
  
    console.log("index", index);
    
    // Prepopulate the form with the data
    this.form.patchValue({
      name: data.name || '',
      email: data.email || '',
      contactNumber: data.mobilenumber || '',
      highestqualification: data?.students[index]?.highestqualification || '',
      stream: data?.students[index]?.stream || '',
      percentage: data?.students[index]?.highest_degree_percentage || '',
      twelfth: data?.students[index]?.twelve_percentage || '',
      tenth: data?.students[index]?.tenth_percentage || '',
      location: data?.students[index]?.current_location || '',
      file: data?.students[index]?.resume || null
    });

    this.newFields = [
      { id: 'highestqualification', placeholder: 'Enter highest qualification', value: data?.students[index]?.highest_qualification || '' },
      { id: 'stream', placeholder: 'Stream', value: data?.students[index]?.stream || '' },
      { id: 'percentage', placeholder: 'Percentage', type: "number", value: data?.students[index]?.highest_degree_percentage || '' },
      { id: 'twelfth', placeholder: '12th Percentage', type: "number", value: data?.students[index]?.twelve_percentage || '' },
      { id: 'tenth', placeholder: '10th Percentage', type: "number", value: data?.students[index]?.tenth_percentage || '' },
      { id: 'location', placeholder: 'Enter Current Location', value: data?.students[index]?.current_location || '' },
      { id: 'file', placeholder: 'Resume', type: 'file', value: data?.students[index]?.resume || null } , // File input won't have a value set programmatically

    ];
  }
  

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    this.fileErrorMessage = null;

    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (['pdf', 'doc', 'docx'].includes(fileExtension)) {
        this.form.patchValue({ file });
        this.form.get('file')?.setErrors(null);
        this.resume = file.name;
        
      } else {
        this.form.patchValue({ file: null });
        this.form.get('file')?.setErrors({ fileType: true });
        this.fileErrorMessage = 'Please provide PDF and Doc files only';
      }
    }
  }



  showAdditionalFields() {
    console.log("BEFORE", this.form.valid, this.studentDetails?.students)
    this.additionalFields = true;
    
    if (this.form.valid && this.studentDetails) {
      console.log("AFTER")
      // Prepopulate the additional fields with student data if available
       
    }
  }
  

  backForm (event: MouseEvent) {
    event.preventDefault();
    this.additionalFields = false; 
  }

  


  onSubmit() {
    
    console.log("Anvesh", this.form.valid)
    this.formSubmitted = true;
    this.fileUploadErrorMessage = null;
    

    if (this.form.valid) {
      
      const formData = new FormData();
      
      formData.append('job_posting_id', this.jobId || '');
      formData.append('applicant_name', this.form.get('name')?.value || '');
      formData.append('applicant_email', this.form.get('email')?.value || '');
      formData.append('applicant_phone', this.form.get('contactNumber')?.value || '');
      formData.append('current_location', this.form.get('location')?.value || '');
      formData.append('applicant_teksenrollmentid', this.form.get('enrollmentId')?.value || '');
      // formData.append('gender', this.form.get('gender')?.value || '');
      formData.append('highest_qualification', this.form.get('highestqualification')?.value || '');
      formData.append('stream', this.form.get('stream')?.value || '');
      formData.append('highest_degree_percentage', this.form.get('percentage')?.value || '');
      formData.append('twelve_percentage', this.form.get('twelfth')?.value || '');
      formData.append('tenth_percentage', this.form.get('tenth')?.value || '');
      
      const resumeFile = this.form.get('file')?.value;
      
        formData.append('resume', resumeFile);
      
      console.log("Anvesh")

      this.http.post(this.apiUrl + '/jobs/apply', formData, { responseType: 'text' }).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          this.router.navigate(['/thankyoupage']);
          setTimeout(() => {
            this.router.navigate(['/jobs']).then(() => window.location.reload());
          }, 2000);
        },
        (error: HttpErrorResponse) => {
          console.error('Error submitting form', error);
          if (error.status === 400 && error.error) {
            
            this.fileUploadErrorMessage = "You have already applied for this job."

          }
          
          else {
            
            this.fileUploadErrorMessage = 'An unexpected error occurred. Please try again later.';
          }
        }
      );
    }
  }

  get closingDateValid() {
    return this.jobDetails?.closing_date && new Date(this.jobDetails.closing_date) > this.todayDate;
  }

  resetForm() {
    this.form.reset();
    this.formSubmitted = false;
    this.fileErrorMessage = null;

    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  setShareUrl(job: any): void {
    const formattedCompanyName = job.company_name.replace(/\s+/g, '-').toLowerCase();
    const formattedJobTitle = job.title.replace(/\s+/g, '-').toLowerCase();
    this.shareUrl = `${window.location.origin}/${job.id}/${formattedCompanyName}/${formattedJobTitle}`;
    this.encodedShareUrl = encodeURIComponent(this.shareUrl);
  }

  copyLink() {
    const textToCopy = this.shareUrl || '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.copied = true;
        setTimeout(() => (this.copied = false), 5000);
      }).catch((err) => {
        console.error('Error copying link:', err);
      });
    } else {
      const tempInput = document.createElement('input');
      tempInput.style.position = 'absolute';
      tempInput.style.left = '-9999px';
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        this.copied = true;
        setTimeout(() => (this.copied = false), 5000);
      } catch (err) {
        console.error('Error copying link:', err);
      } finally {
        document.body.removeChild(tempInput);
      }
    }
  }
}



