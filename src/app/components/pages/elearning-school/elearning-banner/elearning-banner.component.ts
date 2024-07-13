import { Component, ElementRef, OnInit, Inject, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-elearning-banner',
    templateUrl: './elearning-banner.component.html',
    styleUrls: ['./elearning-banner.component.scss']
})
export class ElearningBannerComponent implements OnInit {
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
        // private titleService: Title,
        // private metaService: Meta,
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
        this._lightbox.open(this._album, index);
    }

    close(): void {
        this._lightbox.close();
    }

    activeTab = 1;

    setActiveTab(tabNumber: number): void {
        this.activeTab = tabNumber;
    }

    activeItem: string = 'whyteks'; // Default active item

    isActive(item: string): boolean {
        return this.activeItem === item;
    }

    setActive(item: string): void {
        this.activeItem = item;
    }

    scrollToSection(sectionId: string): void {
        const element = this.el.nativeElement.querySelector(`#${sectionId}`);
        if (element) {
            const offset = 100; // Adjust this value according to your preference
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
        // this.titleService.setTitle('AWS and DevOps Training Institute in Hyderabad');

        // this.metaService.updateTag({
        //     name: 'description',
        //     content: 'Join the AWS and DevOps comprehensive course. Teks Academy is the best training institute to learn AWS DevOps Certification course with 100% job assistance.',
        // });

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

        popupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Process form data here
        });

        const viewMoreBtn = document.getElementById('view_more_btn') as HTMLButtonElement;
        const viewMoreSection = document.getElementById('view_more_section') as HTMLElement;

        viewMoreBtn.addEventListener('click', function () {
            viewMoreSection.style.display = 'block';
            viewMoreBtn.style.display = 'none';
        });

        // For curriculum start
        this.right = document.getElementsByClassName('right') as HTMLCollectionOf<HTMLElement>;
        this.si = this.right.length;
        this.z = 1;

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
      "@type": "CollegeOrUniversity", 
      "name": "Teks Academy", 
      "alternateName": "Kapil Knowledge Hub Private Limited",
       "url": "https://teksacademy.com/", 
       "logo": "https://teksacademy.com/assets/img/logo/mainlogo.svg",
        "sameAs": [ "https://www.facebook.com/teksacademy",
         "https://x.com/TeksAcademy", 
         "https://www.instagram.com/teks_academy/",
          "https://www.youtube.com/@teksacademy", 
          "https://www.linkedin.com/company/teks-academy/mycompany/?viewAsMember=true",
           "https://in.pinterest.com/teksacademy/?actingBusinessId=1151021754672609797" ]
            }
      `;
            this.renderer.appendChild(this.document.head, script);
        }
    }

    bgImage = [
        {
            img: 'assets/img/gray-bg.jpg'
        }
    ]
}
