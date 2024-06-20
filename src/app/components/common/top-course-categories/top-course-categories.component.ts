import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-course-categories',
  templateUrl: './top-course-categories.component.html',
  styleUrls: ['./top-course-categories.component.scss']
})
export class TopCourseCategoriesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
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
        "<i class='bx bx-chevron-right'></i>"
    ]
}
}
