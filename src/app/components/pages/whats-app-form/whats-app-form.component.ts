import { Component } from '@angular/core';
import { Router,ActivatedRoute, NavigationCancel, NavigationEnd, UrlSegment } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-whats-app-form',
  templateUrl: './whats-app-form.component.html',
  styleUrls: ['./whats-app-form.component.scss'],
})
export class WhatsAppFormComponent {
  recaptchaValue!: string;
  siteKey = '6LdG5wEnAAAAAGRXFCnxnjxVDCLmvTLfS0pASUEF';
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  wname: string = '';
  wemail: string = '';
  wphone: string = '';
  wcourse: string = '';
  resetForm() {
    (this.wname = ''),
      (this.wemail = ''),
      (this.wphone = ''),
      (this.wcourse = '')
  }
  wthasappsubmitForm() {
    const whatsappformData = {
      wname: this.wname,
      wemail: this.wemail,
      wphone: this.wphone,
      wcourse: this.wcourse,
    };

    if (!this.wname || !this.wemail || !this.wphone || !this.wcourse) {
      console.error('please fill in all required fields');
      return;
    }
    
    const number = '916305475057';
    this.http
      .post(environment.apiUrl + '/websiteleads/whatsapp-formData', whatsappformData, { responseType: 'text', }).subscribe(
        (response) => {
          this.resetForm();
          window.location.href = `https://api.whatsapp.com/send?phone=${number}&text=I%20want%20to%20chat%20with%20you`
          console.log('form data submited succesfully', response);
          
        },
        (error) => {
          console.log('error submitting form data', error);
        }
      );

    this.resetForm();
  }

  location: any;
  routerSubscription: any;

  ngOnInit() {
    const dsformclose = document.getElementById('dsformclose');
    const popupForm = document.getElementById('popup-form');
    const openBtnw = document.getElementById('open-form');

    dsformclose!.addEventListener('click', function () {
      popupForm!.style.display = 'none';
    });

    openBtnw!.addEventListener('click', function () {
      popupForm!.style.display = 'block';
    });

    document.addEventListener('mousedown', function (event) {
      const target = event.target as HTMLElement;
      if (!popupForm!.contains(target) && target !== openBtnw) {
        popupForm!.style.display = 'none';
      }
    });
    
  }
}
