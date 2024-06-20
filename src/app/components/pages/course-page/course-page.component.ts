import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

declare var $: any;
declare var jQuery: any;
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { } from '@angular/core'; import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {
  [x: string]: any;


  public _album: { src: string, caption: string, cont: string, thumb: string }[] = [];

  // constructor(private titleService: Title, private metaService: Meta, private el: ElementRef){}

  activeTab = 1;

  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }
  // activeTab = 'home'; // Set the default active tab

  // setActiveTab(tab: string): void {
  //   this.activeTab = tab;
  // }

  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      // Adjust the offset value as needed
      const offset = 100; // Change this value according to your preference
      const elementPosition = element.offsetTop - offset;
      window.scroll({ top: elementPosition, behavior: 'smooth' });
    }
  }
  // @ViewChild('closebutton', { static: true }) closebutton!: ElementRef<HTMLButtonElement>;

  constructor(public _lightbox: Lightbox, private el: ElementRef, private fb: FormBuilder) {
    const captions = [""];
    const conts = [""];
    for (let i = 1; i <= 4; i++) {
      const src = 'assets/img/courses/gimg' + i + '.png';
      const caption = captions[i - 1];
      const cont = conts[i - 1];
      const thumb = 'assets/img/courses/gimg' + i + '.png';
      const album = {
        src: src,
        caption: caption,
        cont: cont,
        thumb: thumb
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
  // scroll----
  private modalShown = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.modalShown && window.scrollY > 600) {
      this.showModal();
    }
  }

  private showModal() {
    const modalElement = document.getElementById('myModal');

    if (modalElement) {
      modalElement.style.display = 'block';
      this.modalShown = true;
    }
  }

  closePopup() {
    const modalElement = document.getElementById('myModal');

    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }

  coursesSlides: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 3,
    navText: [
      "<i class='flaticon-chevron'></i>",
      "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 5
      }
    }
  }
  ngOnInit() {
    $("#videoModal").on('hidden.bs.modal', function (e: Event) {
      $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    });

    $("#videoModal2").on('hidden.bs.modal', function (e: Event) {
      $("#videoModal2 iframe").attr("src", $("#videoModal2 iframe").attr("src"));
    });
    $("#videoModal3").on('hidden.bs.modal', function (e: Event) {
      $("#videoModal3 iframe").attr("src", $("#videoModal3 iframe").attr("src"));
    });



    $(document).ready(function () {
      $('.slider1').owlCarousel({
        loop: true,
        thumbs: true,
        items: 1,
        responsiveClass: true, autoplayHoverPause: true,
        autoplay: true,
        slideSpeed: 1000,
        paginationSpeed: 900,
        thumbsPrerendered: true,
        autoplayTimeout: 3000,
        //navText : ["<img src='img/left.png'>","<img src='img/right.png'>"],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          360: {
            items: 1,
            nav: false
          },
          768: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 1,
            nav: false,
            loop: true
          }
        }
      });
    });
  }

}

