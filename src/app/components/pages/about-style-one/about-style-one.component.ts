import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-style-one',
  templateUrl: './about-style-one.component.html',
  styleUrls: ['./about-style-one.component.scss'],
})
export class AboutStyleOneComponent implements OnInit, OnDestroy {
  private jsonLdScriptId = 'json-ld-about';
  private right!: HTMLCollectionOf<HTMLElement>;
  private si!: number;
  private z!: number;

  public _album: {
    src: string;
    caption: string;
    cont: string;
    thumb: string;
  }[] = [];

  constructor(
    private _lightbox: Lightbox,
    private titleService: Title,
    private metaService: Meta,
    private el: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {
    const captions = [''];
    const conts = [''];
    for (let i = 1; i <= 4; i++) {
      const src = 'assets/img/courses/gimg' + i + '.png';
      const caption = captions[i - 1];
      const cont = conts[i - 1];
      const thumb = 'assets/img/courses/gimg' + i + '.png';
      const album = {
        src: src,
        caption: caption,
        cont: cont,
        thumb: thumb,
      };
      this._album.push(album);
    }
  }

  ngOnInit(): void {
    this.addJsonLdScript();
        this.titleService.setTitle(
      'Best IT courses training Institute | Hyderabad | Online & Offline'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Join at Teks Academy IT Courses Training Institute Hyderabad. Offering 30 plus IT, Non-IT courses. Expert Faculty | Updated curriculum | 100% job assistance.',
    });

    this.addJsonLdScript();

    const openBtn = document.getElementById('open-form')!;
    const popupForm = document.getElementById('popup-form')!;

    openBtn.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });

    popupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Process form data here
    });

    const openBtnm = document.getElementById('open-form1')!;
    openBtnm.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });

    const viewMoreBtn = document.getElementById(
      'view_more_btn'
    ) as HTMLButtonElement;
    const viewMoreSection = document.getElementById(
      'view_more_section'
    ) as HTMLElement;

    viewMoreBtn.addEventListener('click', function () {
      viewMoreSection.style.display = 'block';
      viewMoreBtn.style.display = 'none';
    });

    this.right = document.getElementsByClassName(
      'right'
    ) as HTMLCollectionOf<HTMLElement>;
    this.si = this.right.length;
    this.z = 1;
    this.turnRight();
  }

  ngOnDestroy() {
    this.removeJsonLdScript();
  }

  private addJsonLdScript() {
    if (!document.getElementById(this.jsonLdScriptId)) {
      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
      script.id = this.jsonLdScriptId;
      script.text = `
      {

"@context": "http://schema.org",

"@type": "LocalBusiness",

"image": "/assets/img/aboutteks/aboutteks1.png",

"telephone": "1800-120-4748",

"email": "support@teksacademy.com",

"address": {

"@type": "PostalAddress",

"streetAddress": "Plot No. 30, 3rd Floor, Cyber Heights, H. No: 1, 99/64/30, Rohini Layout Rd,Madhapur",

"addressLocality": "Hyderabad",

"postalCode": "500081",

"country": "India"

}

},

{

"@context": "http://schema.org",

"@type": "LocalBusiness",

"image": "/assets/img/aboutteks/aboutteks1.png",

"telephone": "1800-120-4748",

"email": "support@teksacademy.com",

"address": {

"@type": "PostalAddress",

"streetAddress": "2-22-293, Maruti Complex, Plot No 1, near KPHB Metro, Bhagya Nagar Colony, Kukatpally",

"addressLocality": "Hyderabad",

"postalCode": "500085",

"country": "India"

}

},

{

"@context": "http://schema.org",

"@type": "LocalBusiness",

"image": "/assets/img/aboutteks/aboutteks1.png",

"telephone": "1800-120-4748",

"email": "support@teksacademy.com",

"address": {

"@type": "PostalAddress",

"streetAddress": "501,5th Floor, Green House Building, next to Passport Office, Ameerpet",

"addressLocality": ", Hyderabad,",

"postalCode": "500016",

"country": "India"

}

},

{

"@context": "http://schema.org",

"@type": "LocalBusiness",

"image": "/assets/img/aboutteks/aboutteks1.png",

"telephone": "1800-120-4748",

"email": "support@teksacademy.com",

"address": {

"@type": "PostalAddress",

"streetAddress": "H.no: 9- 1-127/4, Flat No: 501 & 502 5th Floor, Amsri Faust Building, S.D. Road,",

"addressLocality": "Secunderabad",

"postalCode": "500025",

"country": "India"

}

},

{

"@context": "http://schema.org",

"@type": "LocalBusiness",

"image": "/assets/img/aboutteks/aboutteks1.png",

"telephone": "1800-120-4748",

"email": "support@teksacademy.com",

"address": {

"@type": "PostalAddress",

"streetAddress": "5th Floor, Padmavathi Complex, H.No. 16, 11-477/3/2/1, Dilsukh Nagar Main Rd, above Poornima Furnitures, opp. Pillar No 1521",

"addressLocality": "Hyderabad",

"postalCode": "500060",

"country": "India"

}

}
      `;

      this.renderer.appendChild(this.document.head, script);
    }
  }

  private removeJsonLdScript() {
    const script = this.document.getElementById(this.jsonLdScriptId);
    if (script) {
      this.renderer.removeChild(this.document.head, script);
    }
  }

  public turnRight(): void {
    if (this.si >= 1) {
      this.si--;
    } else {
      this.si = this.right.length - 1;
      for (let i = 0; i < this.right.length; i++) {
        if (this.right[i] && this.right[i].style) {
          this.right[i].className = 'right';
          this.sttmot(i);
          this.z = 1;
        }
      }
    }

    if (
      this.right[this.si] &&
      this.right[this.si].classList &&
      this.right[this.si].style
    ) {
      this.right[this.si].classList.add('flip');
      this.right[this.si].style.zIndex = '' + this.z;
    }

    this.z++;
  }

  public sttmot(e: number): void {
    setTimeout(() => {
      if (this.right[e] && this.right[e].classList) {
        this.right[e].classList.add('not-flipped');
      }
    }, 200);
  }

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
