import { Component } from '@angular/core';
import { Router,  } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scholarship-program',
  templateUrl: './scholarship-program.component.html',
  styleUrls: ['./scholarship-program.component.scss']
})
export class ScholarshipProgramComponent {

  constructor(private http: HttpClient, private router: Router){}

  
sname: string = '';
semail: string = '';
sphone: string = '';
scourse: string = '';
scity: string = '';
resetForm(){
  this.sname = '',
  this.semail = '',
  this.sphone = '',
  this.scourse = '',
  this.scity = ''
}
slpFrom(){
  const sformdata = {
    wname: this.sname,
    wemail: this.semail,
    wphone: this.sphone,
    wcourse: this.scourse,
    scity: this.scity
  };
  
  if(!this.sname || !this.semail || !this.sphone || !this.scourse || !this.scity){
    console.error('please fill in all required fields');
    return;
  }
  // if(!this.recaptchaValue){
  //   alert('Please complete the reCAPTCHA.');
  //   return;
  // }


// https://demo.teksacademy.com:3000/
  this.http.post('https://demo.teksacademy.com:3000/scholarship-formData', sformdata, { responseType: 'text' }).subscribe(
    response => {
      console.log('form data submited succesfully', response);
      this.resetForm();
      
    },
    error => {
      console.log('error submitting form data', error)
    }
  )

  this.resetForm();
}


ngOnInit(){
  // this.recallJsFuntions();
  var self = this;
      const dsformclose = document.getElementById("dsformclose");
      const popupForm = document.getElementById("popup-form");
      const openBtnw = document.querySelector('.open-form');
      const scourseread = document.getElementById('course') as HTMLInputElement;;

      const javaForm = document.querySelector('.java');
      const pythonForm = document.querySelector('.python');
      const salesforceAdmin = document.querySelector('.salesforceAdmin');
      const digitalmarketing = document.querySelector('.digitalmarketing');
      const autocad = document.querySelector('.autocad');
      const spokenenglish = document.querySelector('.spokenenglish');
      

      dsformclose!.addEventListener("click", function(){
        popupForm!.style.display = 'none';
      });
      
      
      openBtnw!.addEventListener('click', function() {
        popupForm!.style.display = "block";
        self.scourse = '';
        scourseread.readOnly = false;
        
      });

      javaForm!.addEventListener('click', function(){
        popupForm!.style.display = "block";
        self.scourse = 'Java';
        scourseread.readOnly = true;
      });

      pythonForm!.addEventListener('click', function(){
        popupForm!.style.display = "block";
        self.scourse = 'Python';
        scourseread.readOnly = true;
      });

      salesforceAdmin!.addEventListener('click', function(){
        popupForm!.style.display = "block";
        self.scourse = 'Salesforce Admin';
        scourseread.readOnly = true;
      });

      digitalmarketing!.addEventListener('click', function(){
        popupForm!.style.display = "block";
        self.scourse = 'Digital Marketing';
        scourseread.readOnly = true;
      });

      autocad!.addEventListener('click', function(){
        popupForm!.style.display = "block";
        self.scourse = 'AutoCad';
        scourseread.readOnly = true;
      });

      spokenenglish!.addEventListener('click', function(){
        popupForm!.style.display = "block";
        self.scourse = 'Spoken English';
        scourseread.readOnly = true;
      })


      document.addEventListener('mousedown', function(event) {
          const target = event.target as HTMLElement;
          if (!popupForm!.contains(target) && target !== openBtnw) {
            popupForm!.style.display = 'none';
          }
        });
      // whats app link after submiting form
      const sForm = document.getElementById('sForm') as HTMLFormElement;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      sForm.addEventListener('submit', function(event) {
          event.preventDefault();
    
            const name = (sForm.querySelector('#name') as HTMLInputElement).value;
            const email = (sForm.querySelector('#email') as HTMLInputElement).value;
            const phone = (sForm.querySelector('#phone') as HTMLInputElement).value;
            const course = (sForm.querySelector("#course") as HTMLInputElement).value;
            const city = (sForm.querySelector("#city") as HTMLInputElement).value;
            // const recaptcha = (sForm.querySelector('#recaptcha') as HTMLElement);
    
            this.reset()
            // Check if all fields are filled
            if (name && email && phone && course && city ) {
              // Check if email and phone number are in the correct format
              if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
              } else if (!phoneRegex.test(phone)) {
                alert('Please enter a 10-digit phone number without spaces or dashes.');
              }else {
                // Process form data and download syllabus
                const url = 'https://tekslearning.com/thank-you';
                window.open(url, '_blank');
              }
            } else {
              alert('Please fill in all required fields');
            }
          });
    


          gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause',
      scroller: '.custom-container'
    });

    gsap.to('.orange p', {
      scrollTrigger: '.orange',
      duration: 2,
      rotation: 360
    });

    gsap.to('.red', {
      scrollTrigger: {
        trigger: '.red',
        toggleActions: 'restart pause reverse pause'
      },
      duration: 1,
      backgroundColor: '#FFA500',
      ease: 'none'
    });

    gsap.to('.yoyo p', {
      scrollTrigger: '.yoyo',
      scale: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2'
    });
  
          
}



}
