import { Component, ElementRef, OnInit, Inject, Renderer2, } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { DOCUMENT } from '@angular/common';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-fullstackpython',
  templateUrl: './fullstackpython.component.html',
  styleUrls: ['./fullstackpython.component.scss'],
})
export class FullstackpythonComponent {
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
      'Full Stack Python Course Online & Offline Training Hyderabad'
    );

    // set meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Enroll in our Best Full Stack Python Developer course at Teks Academy Hyderabad. Get real-time training in IT Company. Join now to become a Full Stack Developer',
    });

     // Add meta keywords
     this.metaService.updateTag({
      name: 'keywords',
      content: 'Full stack Developer Course, full stack python course, python course training in hyderabad python online course, python classes near me, python coding for beginners, best python course python training, python full stack developer course in hyderabad',
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

    // Regular expressions to validate email and phone number format
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
    //         'https://teksaacademy-intro.s3.ap-south-1.amazonaws.com/download-syllabus/Digital+Marketing.pdf';
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
    $('#videoModalLabelText').on('hidden.bs.modal', function (e: Event) {
      $('#videoModalLabelText iframe').attr(
        'src',
        $('#videoModalLabelText iframe').attr('src')
      );
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
      script.text=`

      {
      
      "@context": "https://schema.org/",
      
      "@type": "Product",
      
      "name": "Teks Academy",
      
      "image": " https://teksacademy.com/assets/img/allcourses/fullstackpython.png ",
      
      "description": " Enroll in our Best Full Stack Python Developer course at Teks Academy Hyderabad. Get real-time training in IT Company. Join now to become a Full Stack Developer",
      
      "mpn": "001",
      
      "sku": "1800-120-4748",
      
      "brand": {
      
      "@type": "brand",
      
      "name": "Teks Academy"
      
      },
      
      "offers": {
      
      "@type": "Offer",
      
      "url": " https://teksacademy.com/courses/best-full-stack-python-development-course-training-institute ",
      
      "priceCurrency": "INR",
      
      "price": "30000",
      
      "priceValidUntil": "2024-11-10",
      
      "availability": "https://schema.org/InStock"
      
      },
      
      "aggregateRating": {
      
      "@type": "AggregateRating",
      
      "ratingValue": "5",
      
      "bestRating": "5",
      
      "worstRating": "1",
      
      "ratingCount": "1525",
      
      "reviewCount": "1525"
      
      },
      
      "review": {
      
      "@type": "Review",
      
      "name": "Shireesha Chittaluri ",
      
      "reviewBody": " My name is Shireesha. I am currently pursuing Python Full Stack Web Development at Teks Academy. My experience in Teks academy is really fully satisfying. I strongly suggest Teks Academy for learning Python Full Stack Web Development.",
      
      "reviewRating": {
      
      "@type": "Rating",
      
      "ratingValue": "5",
      
      "bestRating": "5",
      
      "worstRating": "1"
      
      },
      
      "datePublished": "2024-02-11",
      
      "author": {"@type": "Person", "name": "Teks Academy"}
      
      }
      
      }
      `;

      this.renderer.appendChild(this.document.head, script);
    }
  }
}
