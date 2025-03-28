import { Component, ElementRef, OnInit, Inject, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-kukatpally',
  templateUrl: './kukatpally.component.html',
  styleUrls: ['./kukatpally.component.scss']
})
export class KukatpallyComponent implements OnInit {
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
  efname = '';
  efemail = '';
  efphone = '';
  efcourse = '';
  efbranch = 'kukatpally';
  efcity = '';
  apiUrl = environment.apiUrl;


  //  branches: { [key: string]: string } = {
  //     dilsukhnagar: 'Dilsukhnagar',
  //     ameerpet: 'Ameerpet',
  //     hiteccity: 'Hiteccity',
  //     kukatpally: 'Kukatpally',
  //     secunderabad: 'Secunderabad',
  //     visakhapatnam: 'Visakhapatnam'
  //   };


  constructor(
    private _lightbox: Lightbox,
    private titleService: Title,
    private metaService: Meta,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute, private http: HttpClient, private router: Router
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

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }

  activeTab = 1;

  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

  activeItem: string = 'whyteks'; // Default active item is 'home'

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  setActive(item: string): void {
    this.activeItem = item;
  }

  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      const offset = 100; // Change this value according to your preference
      const elementPosition = element.offsetTop - offset;
      window.scroll({ behavior: 'smooth', top: elementPosition });
    }
  }

  feedbackSlides2: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    autoHeight: true,
    items: 1,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  };

  ngOnInit(): void {

    // const currentPath = this.router.url.split('/').pop() as keyof typeof this.branches; // Type assertion

    // if (currentPath && this.branches[currentPath]) {
    //   this.efbranch = this.branches[currentPath];
    // } else {
    //   this.efbranch = ''; // Fallback if no branch is found
    // }



    this.addJsonLdScript();
    this.titleService.setTitle('Best Software Training Institute in Kukatpally');

    this.metaService.updateTag({
      name: 'description',
      content: 'Join TeksAcademy Kukatpally for Full Stack Python, Java, Data Analytics, AWS DevOps, Digital Marketing, Salesforce, Testing Tools & more. Enroll today!',
    });

    const openBtn = document.getElementById('open-form')!;
    const popupForm = document.getElementById('popup-form')!;

    openBtn.addEventListener('click', () => {
      popupForm.style.display = 'block';
    });

    popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
    });

    const openBtnm = document.getElementById('open-form1')!;
    openBtnm.addEventListener('click', () => {
      popupForm.style.display = 'block';
    });

    popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
    });

    const viewMoreBtn = document.getElementById('view_more_btn') as HTMLButtonElement;
    const viewMoreSection = document.getElementById('view_more_section') as HTMLElement;

    viewMoreBtn.addEventListener('click', () => {
      viewMoreSection.style.display = 'block';
      viewMoreBtn.style.display = 'none';
    });

    this.right = document.getElementsByClassName('right') as HTMLCollectionOf<HTMLElement>;
    this.si = this.right.length;
    this.z = 1;
    this.turnRight();
  }


  resetForm() {
    this.efname = '';
    this.efemail = '';
    this.efphone = '';
    this.efcourse = '';
    this.efbranch = '';
    this.efcity = '';
  }

  eformData() {
    const enquiryFormData = {
      efname: this.efname,
      efemail: this.efemail,
      efphone: this.efphone,
      efcourse: this.efcourse,
      efbranch: this.efbranch,
      efcity: this.efcity
    };

    this.http.post(this.apiUrl + '/websiteleads/enquiry-form-data', enquiryFormData, {
      responseType: 'text'
    }).subscribe(
      () => {
        this.router.navigate(['/thank-you']);
        this.resetForm();
      },
      error => console.error('Error submitting form', error)
    );
  }


  private sttmot(i: number): void {
    setTimeout(() => {
      if (this.right[i] && this.right[i].style) {
        this.right[i].style.zIndex = 'auto';
      }
    }, 300);
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

    if (this.right[this.si] && this.right[this.si].classList && this.right[this.si].style) {
      this.right[this.si].classList.add('flip');
      this.z++;
      this.right[this.si].style.zIndex = this.z.toString();
    }
  }

  public turnLeft(): void {
    if (this.si < this.right.length) {
      this.si++;
    } else {
      this.si = 1;
      for (let i = this.right.length - 1; i > 0; i--) {
        if (this.right[i] && this.right[i].classList && this.right[i].style) {
          this.right[i].classList.add('flip');
          this.right[i].style.zIndex = (this.right.length + 1 - i).toString();
        }
      }
    }

    if (this.right[this.si - 1] && this.right[this.si - 1].classList && this.right[this.si - 1].style) {
      this.right[this.si - 1].className = 'right';
      setTimeout(() => {
        if (this.right[this.si - 1] && this.right[this.si - 1].style) {
          this.right[this.si - 1].style.zIndex = 'auto';
        }
      }, 350);
    }

  }

  private addJsonLdScript() {
    if (!document.getElementById(this.jsonLdScriptId)) {
      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
      script.text = `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Teks Academy - Best Software Training Institute Kukatpally",
  "image": "https://teksacademy.com/assets/img/logo/mainlogo.svg",
  "@id": "",
  "url": "https://teksacademy.com/branch/best-software-training-institute-kukatpally",
  "telephone": "+91-9182278093",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2-22-293, Maruti Complex, Plot No 1, near KPHB Metro, Bhagya Nagar Colony, Kukatpally",
    "addressLocality": "Hyderabad",
    "postalCode": "500085",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4937761,
    "longitude": 78.4017033
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "18:30"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "198"
  },
  "logo": "https://teksacademy.com/assets/img/logo/mainlogo.svg",
  "sameAs": [
    "https://facebook.com/teksacademy",
    "https://twitter.com/teksacademy"
  ]
}

      `;
      this.renderer.appendChild(this.document.head, script);
    }
  }
}
