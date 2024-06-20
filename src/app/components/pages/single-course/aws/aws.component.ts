import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss'],
})
export class AwsComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // set the title
    this.titleService.setTitle(
      'Best Aws Course Training Institutes Teks Academy Hyderabad    '
    );

    // set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Enroll for an AWS + DevOps Course in Hyderabad from one of the leading training institutes.We offer real-time trainers, course materials, and 100% employment assistance.    ',
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
  }
}
