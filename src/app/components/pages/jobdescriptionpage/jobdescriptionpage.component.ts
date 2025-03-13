import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { JobPosting } from 'src/app/Model/jobposting';
import { trigger, transition, style, animate } from '@angular/animations';
import { SessionStorageService } from '../../../session-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobdescriptionpage',
  templateUrl: './jobdescriptionpage.component.html',
  styleUrls: ['./jobdescriptionpage.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
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
  validateRegistrationNumber: any;
  additionalFields: boolean = false;
  applyButtonDisabled: boolean = false;
  enrollmentIdError: string | null = null;
  isDisabled: boolean = true;
  todayDate: Date = new Date();
  lastUploadedResume: string = '';
  resume: any;
  userData: any;

  qualifications = [
    { value: '10th', label: '10th' }, // Added 10th
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Undergraduate', label: 'Undergraduate' },
    { value: 'Postgraduate', label: 'Postgraduate' },
    { value: 'PhD', label: 'PhD' },
    // Added Intermediate
    // Add more options as needed
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private sessionStorageService: SessionStorageService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
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
    // { id: 'highestqualification', placeholder: 'Enter highest qualification' },
    {
      id: 'highestqualification',
      placeholder: 'highest qualification',
      type: 'select',
      options: this.qualifications,
    },
    { id: 'stream', placeholder: 'Stream' },
    { id: 'percentage', placeholder: 'Percentage', type: 'number', value: '' },
    { id: 'twelfth', placeholder: '12th Percentage', type: 'number' },
    { id: 'tenth', placeholder: '10th Percentage', type: 'number' },
    { id: 'location', placeholder: 'Enter Current Location' },
    { id: 'file', placeholder: 'Resume', type: 'file' },
  ];

  ngOnInit(): void {
    this.validateRegistrationNumber = 'is-invalid';
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
    if (
      field.placeholder === 'percentage' ||
      field.placeholder === 'twelfth' ||
      field.placeholder === 'tenth'
    ) {
      const input = event.target as HTMLInputElement;
      // Check if the input is a valid integer
      const regex = /^[0-9]*$/; // Only numbers (0-9)

      if (!regex.test(input.value)) {
        input.value = input.value.replace(/[^0-9]/g, ''); // Remove any non-integer characters
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
    this.isDisabled = !this.isDisabled; // Toggle disabled state
  }

  fetchStudentDetails(event: any) {
    if (event.target.value.length >= 10) {
      this.validateRegistrationNumber = 'is-invalid';
      this.studentRegistrationNumber = { number: event.target.value };

      const apiUrlWithParams = `${this.apiUrl}/jobs/chech_jobapply/${this.studentRegistrationNumber.number}/${this.jobId}`;

      this.http.get<any>(apiUrlWithParams).subscribe(
        (response) => {
          let index = response.students.length - 1;
          if (index < 0) {
            index = 0;
          }
          this.enrollmentIdError = null;
          console.log('Fetched student data:', response);
          this.studentDetails = response;
          this.prepopulateForm(response);
          this.resume = response ? response?.students[index]?.resume : null;
          this.validateRegistrationNumber = 'is-valid';
        },
        (error: HttpErrorResponse) => {
          this.enrollmentIdError =
            error?.error?.message || 'Please Enter Valid Enrollment ID.';

          if (error.status === 400) {
            console.log('Bad Request - Invalid data provided');
          } else {
            this.validateRegistrationNumber = 'is-invalid';
          }
          console.log(
            'validateRegistrationNumber',
            this.validateRegistrationNumber
          );
        }
      );
    }
  }

  isResumeValid() {
    if (!this.resume && !this.lastUploadedResume) {
      this.fileUploadErrorMessage =
        'Please upload a resume or use your last uploaded resume.';
      return false;
    }
    return true;
  }

  // prepopulateForm(data: any) {
  //   let index = data.students.length - 1;
  //   if (index < 0) {
  //     index = 0; // Default to the first student if no data exists
  //   }

  //   console.log("index", index);

  //   // Prepopulate the form with the data
  //   this.form.patchValue({
  //     name: data.name || '',
  //     email: data.email || '',
  //     contactNumber: data.mobilenumber || '',
  //     highestqualification: data?.students[index]?.highestqualification || '',
  //     stream: data?.students[index]?.stream || '',
  //     percentage: data?.students[index]?.highest_degree_percentage || '',
  //     twelfth: data?.students[index]?.twelve_percentage || '',
  //     tenth: data?.students[index]?.tenth_percentage || '',
  //     location: data?.students[index]?.current_location || '',
  //     file: data?.students[index]?.resume || null
  //   });

  //   this.newFields = [
  //     { id: 'highestqualification', placeholder: 'Enter ', value: data?.students[index]?.highest_qualification || '' },
  //     { id: 'stream', placeholder: 'Stream', value: data?.students[index]?.stream || '' },
  //     { id: 'percentage', placeholder: 'Percentage', type: "number", value: data?.students[index]?.highest_degree_percentage || '' },
  //     { id: 'twelfth', placeholder: '12th Percentage', type: "number", value: data?.students[index]?.twelve_percentage || '' },
  //     { id: 'tenth', placeholder: '10th Percentage', type: "number", value: data?.students[index]?.tenth_percentage || '' },
  //     { id: 'location', placeholder: 'Enter Current Location', value: data?.students[index]?.current_location || '' },
  //     { id: 'file', placeholder: 'Resume', type: 'file', value: data?.students[index]?.resume || null } , // File input won't have a value set programmatically

  //   ];
  // }

  openJobApplication() {
    this.userData = this.sessionStorageService.getItem<string>('username');

    let index = this.userData.students.length - 1;
    if (index < 0) {
      index = 0;
    }

    console.log(
      'userData',
      this.userData?.registrationnumber,
      this.jobDetails?.id
    );

    const body = {
      registrationnumber: this.userData?.registrationnumber,
      jobId: this.jobDetails?.id,
    };

    const apiUrl = `${this.apiUrl}/jobs/chech_jobapply`;

    this.http.post<any>(apiUrl, body).subscribe(
      (response) => {
        console.log('Response:', this.userData?.students[index]?.resume);
        Swal.fire({
          html: `
            <div style="max-height: 400px; overflow-y: auto; padding: 20px; font-family: 'Arial', sans-serif;">
              <label for="highestqualification" style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 1px; display: block; text-align: left;">Highest Qualification</label>
              <select 
  id="highestqualification" 
  class="swal2-file" 
  style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-size: 14px;">
  <option value="">Select Highest Qualification</option>
  
  <option value="Graduation" ${
    this.userData?.students[index]?.highest_qualification === 'Graduation'
      ? 'selected'
      : ''
  }>Graduation</option>
  <option value="Post Graduation" ${
    this.userData?.students[index]?.highest_qualification === 'Post Graduation'
      ? 'selected'
      : ''
  }>Post Graduation</option>
  <option value="PhD" ${
    this.userData?.students[index]?.highest_qualification === 'PhD'
      ? 'selected'
      : ''
  }>PhD</option>
</select>
              <span style="text-align: left; margin-bottom: 3px; margin-top: 0px;" id="highestqualification-error" class="error-message"></span>
        
              <label for="stream" style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 1px; display: block; text-align: left;">Stream</label>
              <input type="text" id="stream" class="swal2-file" style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-size: 14px;" value="${
                this.userData?.students[index]?.stream || ''
              }" >
              <span style="text-align: left; margin-bottom: 3px; margin-top: 0px;" id="stream-error" class="error-message"></span>
        
              <label for="percentage" style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 1px; display: block; text-align: left;">Percentage</label>
              <input type="number" id="percentage" class="swal2-file" style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-size: 14px;" value="${
                this.userData?.students[index]?.highest_degree_percentage || ''
              }" >
              <span style="text-align: left; margin-bottom: 3px; margin-top: 0px;" id="percentage-error" class="error-message"></span>
        
              <label for="twelfth" style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 1px; display: block; text-align: left;">12th / Diploma Percentage</label>
              <input type="number" id="twelfth" class="swal2-file" style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-size: 14px;" value="${
                this.userData?.students[index]?.twelve_percentage || ''
              }" >
              <span style="text-align: left; margin-bottom: 3px; margin-top: 0px;" id="twelfth-error" class="error-message"></span>

              <label for="tenth" style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 1px; display: block; text-align: left;">10th Percentage</label>
              <input type="number" id="tenth" class="swal2-file" style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-size: 14px;" value="${
                this.userData?.students[index]?.tenth_percentage || ''
              }" accept=".pdf, .doc, .docx">
              <span  style="text-align: left; margin-bottom: 3px; margin-top: 0px;" id="tenth-error" class="error-message"></span>

              <label for="location" style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 1px; display: block; text-align: left;">Current Location</label>
              <input type="text" id="location" class="swal2-file" style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-size: 14px;" value="${
                this.userData?.students[index]?.current_location || ''
              }" >
              <span  style="text-align: left; margin-bottom: 3px; margin-top: 0px;" id="location-error" class="error-message"></span>

              <label for="resume" style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 1px; display: block; text-align: left;">Resume</label>
              <input type="file" id="resumee" class="swal2-file" style="width: 100%; padding: 10px; margin: 8px 0; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-size: 14px;" >
              <span style="text-align: left; margin-bottom: 3px; margin-top: 0px;" id="resumee-error" class="error-message"></span>

              ${
                this.userData?.students[index]?.resume
                  ? `
                <p id="resume-name" style="display: inline-block; margin-right: 10px; text-align: left;">${this.userData?.students[index]?.resume}</p>
                <button id="download-button" style="color: #405189; border: none; background-color: transparent; cursor: pointer;">
                  <i class="fa-solid fa-file-arrow-down ms-2"></i>
                </button>
              `
                  : ''
              }
            </div>
          `,
          didOpen: () => {
            const fields = [
              'highestqualification',
              'stream',
              'percentage',
              'twelfth',
              'tenth',
              'location',
              'resumee',
            ];

            fields.forEach((id) => {
              const input = document.getElementById(id) as HTMLInputElement;
              const errorElement = document.getElementById(
                `${id}-error`
              ) as HTMLSpanElement;

              if (input && errorElement) {
                input.addEventListener('input', () => {
                  errorElement.textContent = ''; // Clear error message on user input
                });
              }
            });

            const downloadButton = document.getElementById('download-button');
            if (downloadButton) {
              downloadButton.addEventListener(
                'click',
                this.downloadCV.bind(this)
              );
            }
          },
          width: 700,
          showCancelButton: true,
          confirmButtonText: 'Apply',
          confirmButtonColor: '#405189',

          preConfirm: () => {
            const fields = [
              {
                id: 'highestqualification',
                key: 'highest_qualification',
                label: 'Highest Qualification',
              },
              { id: 'stream', key: 'stream', label: 'Stream' },
              {
                id: 'percentage',
                key: 'highest_degree_percentage',
                label: 'Percentage',
                type: 'number',
              },
              {
                id: 'twelfth',
                key: 'twelve_percentage',
                label: '12th Percentage',
                type: 'number',
              },
              {
                id: 'tenth',
                key: 'tenth_percentage',
                label: '10th Percentage',
                type: 'number',
              },
              {
                id: 'location',
                key: 'current_location',
                label: 'Current Location',
              },
              { id: 'resumee', key: 'resume', label: 'Resume', type: 'file' },
            ];

            let isValid = true;
            const formData: Record<string, any> = {}; // Object to store final data

            fields.forEach((field) => {
              const input = document.getElementById(
                field.id
              ) as HTMLInputElement;
              const errorElement = document.getElementById(
                `${field.id}-error`
              ) as HTMLSpanElement;

              if (errorElement) errorElement.textContent = ''; // Clear previous errors

              // Resume logic
              if (field.id === 'resumee') {
                const uploadedFile = input.files?.[0];
                const previousResume = this.userData?.students[index]?.resume;

                if (uploadedFile) {
                  const allowedExtensions = ['pdf', 'doc', 'docx'];
                  const fileExtension = uploadedFile.name
                    .split('.')
                    .pop()
                    ?.toLowerCase();

                  if (
                    !fileExtension ||
                    !allowedExtensions.includes(fileExtension)
                  ) {
                    errorElement.textContent =
                      'Only PDF, DOC, and DOCX files are allowed!';
                    isValid = false;
                  } else {
                    formData[field.key] = uploadedFile; // Store new resume
                  }
                } else if (this.userData?.students[index]?.resume) {
                  formData[field.key] = previousResume; // Use old resume if no new one uploaded
                } else {
                  errorElement.textContent = 'Please upload a resume.';
                  isValid = false;
                }
              }
              // Other field logic
              else {
                const previousValue =
                  this.userData?.students[index]?.[field.key] || '';
                const newValue = input?.value.trim();

                if (!newValue && !previousValue) {
                  errorElement.textContent = `Please enter your ${field.label}.`;
                  isValid = false;
                } else {
                  formData[field.key] = newValue || previousValue; // Prioritize new value, else keep old
                }

                if (
                  field.type === 'number' &&
                  (parseFloat(input.value) <= 0 ||
                    parseFloat(input.value) > 100)
                ) {
                  errorElement.textContent = `Please enter a valid ${field.label} between 0 and 100.`;
                  isValid = false;
                }
              }
            });

            return isValid ? formData : false;
          },

          customClass: {
            popup: 'swal2-popup-custom',
          },
        }).then((resume) => {
          if (resume.isConfirmed) {
            console.log('fbasfvasnbvf', this.userData);

            const formData = new FormData();

            formData.append('job_posting_id', this.jobDetails?.id || '');
            formData.append('applicant_name', this.userData?.name || '');
            formData.append('applicant_email', this.userData?.email || '');
            formData.append(
              'applicant_phone',
              this.userData?.mobilenumber || ''
            );
            formData.append(
              'current_location',
              resume?.value?.current_location || ''
            );
            formData.append(
              'applicant_teksenrollmentid',
              this.userData?.registrationnumber || ''
            );
            // formData.append('gender', this.form.get('gender')?.value || '');
            formData.append(
              'highest_qualification',
              resume?.value?.highest_qualification || ''
            );
            formData.append('stream', resume?.value?.stream || '');
            formData.append(
              'highest_degree_percentage',
              resume?.value?.highest_degree_percentage || ''
            );
            formData.append(
              'twelve_percentage',
              resume?.value?.twelve_percentage || ''
            );
            formData.append(
              'tenth_percentage',
              resume?.value?.tenth_percentage || ''
            );

            formData.append('resume', resume?.value?.resume);

            console.log('Anvesh');

            this.http
              .post(this.apiUrl + '/jobs/apply', formData, {
                responseType: 'text',
              })
              .subscribe(
                (response) => {
                  console.log(
                    'Form submitted successfully',
                    JSON.parse(response)?.application
                  );
                  this.userData.students.unshift(
                    JSON.parse(response)?.application
                  );
                  sessionStorage.setItem(
                    'username',
                    JSON.stringify(this.userData)
                  );

                  console.log('asbcxvbnvcbnasvbn', this.userData);
                  // Swal.fire("Applied!", "Your form has been submitted.", "success",);
                  Swal.fire({
                    title: 'Applied! ',
                    icon: 'success',
                    text: 'Your form has been submitted.',
                    confirmButtonColor: '#405189',
                  });
                },
                (error: HttpErrorResponse) => {
                  const errorMessage =
                    JSON.parse(error.error)?.message || 'Something went wrong.';
                  console.error('Error submitting form', errorMessage);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorMessage,
                    confirmButtonColor: '#405189',
                  });
                }
              );
          }
        });
      },
      (error: HttpErrorResponse) => {
        this.enrollmentIdError =
          error?.error?.message || 'Please Enter Valid Enrollment ID.';

        if (error.status === 400) {
          console.log('Bad Request - Invalid data provided');
        } else {
          this.validateRegistrationNumber = 'is-invalid';
        }
        console.log(
          'validateRegistrationNumber',
          this.validateRegistrationNumber
        );
      }
    );
  }

  downloadCV(): void {
    console.log('cbxncvnxcvnbxvcbnxzc');
    let index = this.userData.students.length - 1;
    if (index < 0) {
      index = 0; // Default to the first student if no data exists
    }

    const baseURL =
      'https://teksacademy.s3.ap-south-1.amazonaws.com/HRM/Applicants_CV/';

    if (true) {
      //const sanitizedFileUrl = encodeURIComponent(fileUrl.trim()); // Trim and encode URL to avoid issues
      const sanitizedFileUrl = this.userData?.students[index]?.resume;
      const fullURL = `${baseURL}${sanitizedFileUrl}`; // Correct string interpolation
      const link = document.createElement('a');
      link.href = fullURL;
      link.download = sanitizedFileUrl; // Use sanitized file name
      link.target = '_blank'; // Open in a new tab
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.log('CV not upload');
    }
  }

  prepopulateForm(data: any) {
    let index = data.students.length - 1;
    if (index < 0) {
      index = 0; // Default to the first student if no data exists
    }

    console.log('index', index);

    // Prepopulate the form with the data
    this.form.patchValue({
      name: data.name || '',
      email: data.email || '',
      contactNumber: data.mobilenumber || '',
      highestqualification: data?.students[index]?.highestqualification || '', // Prepopulate the dropdown value
      stream: data?.students[index]?.stream || '',
      percentage: data?.students[index]?.highest_degree_percentage || '',
      twelfth: data?.students[index]?.twelve_percentage || '',
      tenth: data?.students[index]?.tenth_percentage || '',
      location: data?.students[index]?.current_location || '',
      file: data?.students[index]?.resume || null,
    });

    // Update the newFields array for the form inputs
    this.newFields = [
      {
        id: 'highestqualification',
        placeholder: 'Select highest qualification',
        type: 'select',
        value: data?.students[index]?.highest_qualification || '',
        options: this.qualifications,
      },
      {
        id: 'stream',
        placeholder: 'Stream',
        value: data?.students[index]?.stream || '',
      },
      {
        id: 'percentage',
        placeholder: 'Percentage',
        type: 'number',
        value: data?.students[index]?.highest_degree_percentage || '',
      },
      {
        id: 'twelfth',
        placeholder: '12th Percentage',
        type: 'number',
        value: data?.students[index]?.twelve_percentage || '',
      },
      {
        id: 'tenth',
        placeholder: '10th Percentage',
        type: 'number',
        value: data?.students[index]?.tenth_percentage || '',
      },
      {
        id: 'location',
        placeholder: 'Enter Current Location',
        value: data?.students[index]?.current_location || '',
      },
      {
        id: 'file',
        placeholder: 'Resume',
        type: 'file',
        value: data?.students[index]?.resume || null,
      },
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
    console.log('BEFORE', this.form.valid, this.studentDetails?.students);
    this.additionalFields = true;

    if (this.form.valid && this.studentDetails) {
      console.log('AFTER');
      // Prepopulate the additional fields with student data if available
    }
  }

  backForm(event: MouseEvent) {
    event.preventDefault();
    this.additionalFields = false;
  }

  onSubmit() {
    console.log('Anvesh', this.form.valid);
    this.formSubmitted = true;
    this.fileUploadErrorMessage = null;

    if (this.form.valid) {
      const formData = new FormData();

      formData.append('job_posting_id', this.jobId || '');
      formData.append('applicant_name', this.form.get('name')?.value || '');
      formData.append('applicant_email', this.form.get('email')?.value || '');
      formData.append(
        'applicant_phone',
        this.form.get('contactNumber')?.value || ''
      );
      formData.append(
        'current_location',
        this.form.get('location')?.value || ''
      );
      formData.append(
        'applicant_teksenrollmentid',
        this.form.get('enrollmentId')?.value || ''
      );
      // formData.append('gender', this.form.get('gender')?.value || '');
      formData.append(
        'highest_qualification',
        this.form.get('highestqualification')?.value || ''
      );
      formData.append('stream', this.form.get('stream')?.value || '');
      formData.append(
        'highest_degree_percentage',
        this.form.get('percentage')?.value || ''
      );
      formData.append(
        'twelve_percentage',
        this.form.get('twelfth')?.value || ''
      );
      formData.append('tenth_percentage', this.form.get('tenth')?.value || '');

      const resumeFile = this.form.get('file')?.value;

      formData.append('resume', resumeFile);

      console.log('Anvesh');

      this.http
        .post(this.apiUrl + '/jobs/apply', formData, { responseType: 'text' })
        .subscribe(
          (response) => {
            console.log('Form submitted successfully', response);
            this.router.navigate(['/thankyoupage']);
            setTimeout(() => {
              this.router
                .navigate(['/jobs'])
                .then(() => window.location.reload());
            }, 2000);
          },
          (error: HttpErrorResponse) => {
            console.error('Error submitting form', error);
            if (error.status === 400 && error.error) {
              this.fileUploadErrorMessage =
                'You have already applied for this job.';
            } else {
              this.fileUploadErrorMessage =
                'An unexpected error occurred. Please try again later.';
            }
          }
        );
    }
  }

  get closingDateValid() {
    return (
      this.jobDetails?.closing_date &&
      new Date(this.jobDetails.closing_date) > this.todayDate
    );
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
    const formattedCompanyName = job.company_name
      .replace(/\s+/g, '-')
      .toLowerCase();
    const formattedJobTitle = job.title.replace(/\s+/g, '-').toLowerCase();
    this.shareUrl = `${window.location.origin}/${job.id}/${formattedCompanyName}/${formattedJobTitle}`;
    this.encodedShareUrl = encodeURIComponent(this.shareUrl);
  }

  copyLink() {
    const textToCopy = this.shareUrl || '';
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          this.copied = true;
          setTimeout(() => (this.copied = false), 5000);
        })
        .catch((err) => {
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
