import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationCancel,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class AppComponent {
  showPreloader = true;
  // title = 'teksacademy';
  // recaptchaValue!:string;
  // siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  constructor(private http: HttpClient, private router: Router) {}

  // wname: string = '';
  // wemail: string = '';
  // wphone: string = '';
  // wcourse: string = '';

  // wthasappsubmitForm(){
  //   const whatsappformData = {
  //     wname: this.wname,
  //     wemail: this.wemail,
  //     wphone: this.wphone,
  //     wcourse: this.wcourse
  //   };

  //   if(!this.wname || !this.wemail || !this.wphone || !this.wcourse){
  //     console.error('please fill in all required fields');
  //     return;
  //   }
  //   if(!this.recaptchaValue){
  //     alert('Please complete the reCAPTCHA.');
  //     return;
  //   }

  //   this.http.post('https://demo.teksacademy.com:3000/whatsapp-formData', whatsappformData, { responseType: 'text' }).subscribe(
  //     response => {
  //       console.log('form data submited succesfully', response);

  //     },
  //     error => {
  //       console.log('error submitting form data', error)
  //     }
  //   )
  // }

  location: any;
  routerSubscription: any;

  ngOnInit() {
    this.recallJsFuntions();

    //         const dsformclose = document.getElementById("dsformclose");
    //         const popupForm = document.getElementById("popup-form");
    //         const openBtnw = document.getElementById('open-form');

    //         dsformclose!.addEventListener("click", function(){
    //           popupForm!.style.display = 'none';
    //         });

    //         openBtnw!.addEventListener('click', function() {
    //           popupForm!.style.display = "block";
    //         });

    //         document.addEventListener('mousedown', function(event) {
    //             const target = event.target as HTMLElement;
    //             if (!popupForm!.contains(target) && target !== openBtnw) {
    //               popupForm!.style.display = 'none';
    //             }
    //           });
    //         // whats app link after submiting form
    //         const wForm = document.getElementById('wForm') as HTMLFormElement;
    //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         const phoneRegex = /^\d{10}$/;
    //         wForm.addEventListener('submit', function(event) {
    //             event.preventDefault();

    //               const name = (wForm.querySelector('#name') as HTMLInputElement).value;
    //               const email = (wForm.querySelector('#email') as HTMLInputElement).value;
    //               const phone = (wForm.querySelector('#phone') as HTMLInputElement).value;
    //               const course = (wForm.querySelector("#city") as HTMLInputElement).value;

    //               // Check if all fields are filled
    //               if (name && email && phone && course) {
    //                 // Check if email and phone number are in the correct format
    //                 if (!emailRegex.test(email)) {
    //                   alert('Please enter a valid email address.');
    //                 } else if (!phoneRegex.test(phone)) {
    //                   alert('Please enter a 10-digit phone number without spaces or dashes.');
    //                 } else {
    //                   // Process form data and download syllabus
    //                   const url = 'https://api.whatsapp.com/send?phone=918688408118&text=I%20want%20to%20chat%20with%20you';
    //                   window.open(url, '_blank');
    //                 }
    //               } else {
    //                 alert('Please fill in all required fields Before chat.');
    //               }
    //             });
  }

  recallJsFuntions() {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationCancel
        )
      )
      .subscribe((event) => {
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
  }
}
