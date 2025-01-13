import { Component, ElementRef, OnInit,  Inject, Renderer2, } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { DOCUMENT } from '@angular/common';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-sapfico',
  templateUrl: './sapfico.component.html',
  styleUrls: ['./sapfico.component.scss'],
})
export class SapficoComponent {
  private jsonLdScriptId = 'json-ld-about';
  // constructor(private titleService: Title, private metaService: Meta) {}
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

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  activeTab = 1;

  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }
  // activeTab = 'home'; // Set the default active tab

  // setActiveTab(tab: string): void {
  //   this.activeTab = tab;
  // }

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
      // Adjust the offset value as needed
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
    this.addJsonLdScript();
    // set the title
    this.titleService.setTitle(
      'SAP FICO Training Course  Hyderabad | 100% Job assistance'
    );

    // the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Unlock the best SAP FICO course at Teks Academy. Dive into financial accounting and controlling to advance your career. Enroll now for expert-led training',
    });

     // Add meta keywords
     this.metaService.updateTag({
      name: 'keywords',
      content: 'sap fico training , sap fico training in hyderabad, sap finance course, sap fico course in hyderabad',
    });

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
    // const popupForm = document.getElementById('popup-form')!;

    openBtnm.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });

    popupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
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

    // // Regular expressions to validate email and phone number format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const phoneRegex = /^\d{10}$/;

    // dsForm.addEventListener('submit', function (event) {
    //   event.preventDefault();

    //   const name = (dsForm.querySelector('#name') as HTMLInputElement).value;
    //   const email = (dsForm.querySelector('#email') as HTMLInputElement).value;
    //   const phone = (dsForm.querySelector('#phone') as HTMLInputElement).value;
    //   const city = (dsForm.querySelector('#city') as HTMLInputElement).value;

    //   // Check if all fields are filled
    //   if (name && email && phone && city) {
    //     if (name === '') {
    //       alert('Please enter your name.');
    //     } else if (email === '' || !emailRegex.test(email)) {
    //       alert('Please enter a valid email address.');
    //     } else if (phone === '' || !phoneRegex.test(phone)) {
    //       alert(
    //         'Please enter a 10-digit phone number without spaces or dashes.'
    //       );
    //     } else {
    //       // Process form data and download syllabus
    //       const url =
    //         'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/download-syllabus/SAP+FICO+Syllabus.pdf';
    //       window.open(url, '_blank');
    //     }
    //   } else {
    //     // One or more required fields are empty
    //     alert('Please fill in all required fields.');
    //   }
    // });

    // for curricullum start
    // Initialize your variables
    this.right = document.getElementsByClassName(
      'right'
    ) as HTMLCollectionOf<HTMLElement>;
    this.si = this.right.length;
    this.z = 1;

    // Assuming you want to turn right on component initialization
    this.turnRight();
  }
  ngOnDestroy() {
    this.removeJsonLdScript();
  }
  private removeJsonLdScript() {
    const script = this.document.getElementById(this.jsonLdScriptId);
    if (script) {
      this.renderer.removeChild(this.document.head, script);
    }
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

    if (
      this.right[this.si] &&
      this.right[this.si].classList &&
      this.right[this.si].style
    ) {
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

    if (
      this.right[this.si - 1] &&
      this.right[this.si - 1].classList &&
      this.right[this.si - 1].style
    ) {
      this.right[this.si - 1].className = 'right';
      setTimeout(() => {
        if (this.right[this.si - 1] && this.right[this.si - 1].style) {
          this.right[this.si - 1].style.zIndex = 'auto';
        }
      }, 350);
    }

    // for curricullum end

    // for video testimonals
    $('#videoModal').on('hidden.bs.modal', function (e: Event) {
      $('#videoModal iframe').attr('src', $('#videoModal iframe').attr('src'));
    });

    $('#videoModal2').on('hidden.bs.modal', function (e: Event) {
      $('#videoModal2 iframe').attr(
        'src',
        $('#videoModal2 iframe').attr('src')
      );
    });
    $('#videoModal3').on('hidden.bs.modal', function (e: Event) {
      $('#videoModal3 iframe').attr(
        'src',
        $('#videoModal3 iframe').attr('src')
      );
    });
    //
  }
  private addJsonLdScript() {
    if (!document.getElementById(this.jsonLdScriptId)) {
      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
        // script.id = this.jsonLdScriptId;
      script.text = `
    {

"@context": "https://schema.org/",

"@type": "Product",

"name": "Teks Academy",

"image": " https://teksacademy.com/assets/img/allcourses/Sapfico.jpg ",

"description": " Unlock the best SAP FICO course at Teks Academy. Dive into financial accounting and controlling to advance your career. Enroll now for expert-led training ",

"mpn": "001",

"sku": "1800-120-4748",

"brand": {

"@type": "brand",

"name": "Teks Academy"

},

"offers": {

"@type": "Offer",

"url": " https://teksacademy.com/courses/best-sap-fico-finance-and-controlling-course-training-institute ",

"priceCurrency": "INR",

"price": "30000",

"priceValidUntil": "2025-11-10",

"availability": "https://schema.org/InStock"

},

"aggregateRating": {

"@type": "AggregateRating",

"ratingValue": "5",

"bestRating": "5",

"worstRating": "1",

"ratingCount": "1283",

"reviewCount": "1283"

},

"review": {

"@type": "Review",

"name": "kavya",

"reviewBody": " I have joined for SAP-FICO course at Teks Academy and it exceeded my expectations! The trainers are extremely competent and have provided in-depth insights into SAP's Financial Accounting Controlling Accounting. The direct instruction and real-world examples greatly improved my understanding. I highly suggest this course to anyone wishing to succeed in SAP finance. ",

"reviewRating": {

"@type": "Rating",

"ratingValue": "5",

"bestRating": "5",

"worstRating": "1"

},

"datePublished": "2025-02-11",

"author": {"@type": "Person", "name": "Teks Academy"}

}

}
      `;

      this.renderer.appendChild(this.document.head, script);
    }
  }
}
