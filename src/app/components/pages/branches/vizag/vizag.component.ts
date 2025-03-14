// --------------------
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
  selector: 'app-vizag',
  templateUrl: './vizag.component.html',
  styleUrls: ['./vizag.component.scss']
})
export class VizagComponent implements OnInit {
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
  efbranch = 'visakhapatnam';
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
    // Initialize album data
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
    this.titleService.setTitle('Best software training institute in visakhapatnam');

    this.metaService.updateTag({
      name: 'description',
      content: 'Join our Vizag branch for expert training in Full Stack Python, Java, Digital Marketing, Data Science, AWS DevOps, Salesforce, and Testing Tools. Enroll now!',
    });

    // Popup form handling
    const openBtn = document.getElementById('open-form')!;
    const popupForm = document.getElementById('popup-form')!;

    openBtn.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });

    popupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
    });

    const openBtnm = document.getElementById('open-form1')!;
    openBtnm.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });

    popupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
    });

    const viewMoreBtn = document.getElementById('view_more_btn') as HTMLButtonElement;
    const viewMoreSection = document.getElementById('view_more_section') as HTMLElement;

    viewMoreBtn.addEventListener('click', function () {
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

  // private jsonLdScriptId = 'localBusinessJsonLd';

  private addJsonLdScript() {
    if (!document.getElementById(this.jsonLdScriptId)) {
      const script = this.renderer.createElement('script');
      script.id = this.jsonLdScriptId;
      script.type = 'application/ld+json';
      script.text = `
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Teks Academy - Best Software Training Institute Visakhapatnam",
    "image": "https://teksacademy.com/assets/img/logo/mainlogo.svg",
    "url": "https://teksacademy.com/branch/best-software-training-institute-visakhapatnam",
    "telephone": "+91-9133308352",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Pavan Towers, Dwaraka Nagar 1st Lane, Opp Budhil Park",
      "addressLocality": "Visakhapatnam",
      "postalCode": "530016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.7258656,
      "longitude": 83.30648769999999
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
      "ratingValue": "4.8",
      "reviewCount": "245"
    },
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




