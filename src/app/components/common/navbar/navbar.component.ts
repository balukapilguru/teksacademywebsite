import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SessionStorageService } from '../../../../app/session-storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  reDirectTo: string | null = '';
  apiUrl = environment.apiUrl;
  constructor(
    private router: Router,
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}
  shouldDisplayOptionItem(): boolean {
    // Get the current URL
    const currentUrl = this.router.url;

    // Check if the current URL matches the specified pattern
    // return currentUrl !== '/webinar/salesforce';
    const hidePatterns = [
      '/webinar/salesforce',
      '/webinar/bim',
      '/webinar/full-stack',
      'webinar/digital-marketing',
      'webinar/data-science',
      'webinar/aws-plus-devops',
    ];
    return !hidePatterns.some((pattern) => currentUrl.includes(pattern));
  }

  ngOnInit(): void {
    //     var currentUrl = window.location.href;

    // // Check if the current URL matches the specified pattern
    // if (currentUrl === 'https://www.teksacademy.com/fullstack') {
    //     // If the condition is true, hide the option-item section
    //     document.querySelector('.option-item').style.display = 'none';
    // }
    this.reDirectTo = null;
  }

  reloadPage() {
    if (this.router.url === '/') {
      // Force a reload when already on the home page
      window.location.reload();
    } else {
      // Navigate to the home page and reload after navigation completes
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }

  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  // openJobPortalById(){
  //     this.reDirectTo = true
  //     console.log("Enter Enroll Id", this.reDirectTo)
  //     Swal.fire({
  //       title: "Enter your enrollment ID to access the job portal",
  //       input: "text",
  //       inputAttributes: {
  //         autocapitalize: "off"
  //       },
  //       showCancelButton: true,
  //       confirmButtonText: "Open",
  //       showLoaderOnConfirm: true,
  //       preConfirm: async (login) => {

  //         try {
  //           const githubUrl = `
  //           ${this.apiUrl}/jobs/chech_jobapply/${login}
  //           `;
  //           const response = await fetch(githubUrl);
  //           if (response=== null) {
  //             return Swal.showValidationMessage(`
  //               Valid User
  //             `);
  //           }
  //           else {
  //             Swal.showValidationMessage(`
  //               Request failed: Please enter Valid ID
  //             `);
  //           }
  //           return "Valid User"
  //         } catch (error) {
  //           Swal.showValidationMessage(`
  //             Request failed: ${error}
  //           `);
  //         }
  //       },
  //       allowOutsideClick: () => !Swal.isLoading()
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         Swal.fire({
  //           title: `${result}'s avatar`,

  //         });
  //       }
  //     });
  // }

  openJobPortalById() {
    this.reDirectTo = this.sessionStorageService.getItem<string>('username');
    console.log('sfbasmnfbanf', this.reDirectTo);

    if(this.reDirectTo === null) {
        Swal.fire({
            title: 'Please enter your registered Mail ID to access the job portal',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off',
            },
            showCancelButton: true,
            confirmButtonText: 'Open',
            showLoaderOnConfirm: true,
            confirmButtonColor: '#405189',
            preConfirm: async (login) => {
              try {
                const githubUrl = `${this.apiUrl}/jobs/chech_jobapply`;
                const response = await fetch(githubUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email: login }),
                });
      
                if (response.status === 200) {
                    const responseBody = await response.json();
                    this.sessionStorageService.setItem('username',responseBody);
                  this.router.navigate(['/jobs']);
                  
                  return `Hi ${responseBody?.name}, Welcome Back to the Job Portal`;
                } else {
                  const errorData = await response.json();
                  Swal.showValidationMessage(
                    `Request failed: ${errorData.message || 'Invalid Mail'}`
                  );
                  return 'Invalid User';
                }
              } catch (error) {
                const errorMessage =
                  (error as { message: string }).message || 'An error occurred';
                Swal.showValidationMessage(`Request failed: ${errorMessage}`);
                return 'Error';
              }
            },
            allowOutsideClick: () => !Swal.isLoading(),
          }).then((result) => {
            console.log('Anvesh', result);
            if (result.isConfirmed) {
              Swal.fire({
                title: `${result?.value}`,
                confirmButtonColor: '#405189'
              });
            }
          }); 
    }else{
        this.router.navigate(['/jobs']);
    }

    
  }
}
