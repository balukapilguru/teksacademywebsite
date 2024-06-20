import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-elearning-school',
  templateUrl: './elearning-school.component.html',
  styleUrls: ['./elearning-school.component.scss'],
})
export class ElearningSchoolComponent implements OnInit {
  private jsonLdScriptId = 'json-ld-about';
  constructor(private renderer: Renderer2, private sanitizer: DomSanitizer, @Inject(DOCUMENT) private document: Document) { }
  activeIndex: number = 0;
  testimonialsSmall = [
    {
      name: 'Vanga Ravi Teja',
      content:
        'Teks Academy provides a well-structured curriculum that covers all aspects of Full Stack Python development. From front-end to back-end, I learned everything I needed to become a skilled developer.',
      image: '../../../../assets/img/home_testimonials/Vanga Ravi Teja.png',
      course: 'Full Stack Python',
    },
    {
      name: 'Sai Pavan Goud',
      content:
        'The institute counselors played a pivotal role in guiding me into this course, offering invaluable assistance along the way. I completed a data science course.',
      image: '../../../../assets/img/home_testimonials/Sai Pavan Goud.png',
      course: 'Data Science',
    },
    {
      name: 'Samala Suhas',
      content:
        'I finished my data analytics course at this academy after I looked up reviews and ratings online before choosing to join this academy. I picked the Ameerpet branch.',
      image: '../../../../assets/img/home_testimonials/Samala Suhas.png',
      course: 'Data Analytics',
    },
    {
      name: 'KNV Ram',
      content:
        'At the academy where he completed courses, the trainers were incredibly friendly, and the quality of teaching was top-notch. They delved deeply into every topic, ensuring comprehensive coverage.',
      image: '../../../../assets/img/home_testimonials/KNV Ram.png',
      course: 'AutoCAD, BIM (Revit), 3DS Max & Sketchup',
    },
    {
      name: 'Yashoda Ram',
      content:
        'The curriculum is comprehensive and up-to-date, covering everything from Java fundamentals to building full stack applications.',
      image: '../../../../assets/img/home_testimonials/Yashoda Ram.png',
      course: 'Full Stack Java ',
    },
  ];
  testimonialsBig = [
    {
      name: 'Vanga Ravi Teja',
      content:
        'Teks Academy provides a well-structured curriculum that covers all aspects of Full Stack Python development. From front-end to back-end, I learned everything I needed to become a skilled developer.',
      image: '../../../../assets/img/home_testimonials/Vanga Ravi Teja.png',
      course: 'Full Stack Python',
    },
    {
      name: 'Sai Pavan Goud',
      content:
        'The institute counselors played a pivotal role in guiding me into this course, offering invaluable assistance along the way. I completed a data science course.',
      image: '../../../../assets/img/home_testimonials/Sai Pavan Goud.png',
      course: 'Data Science',
    },
    {
      name: 'Samala Suhas',
      content:
        'I finished my data analytics course at this academy after I looked up reviews and ratings online before choosing to join this academy. I picked the Ameerpet branch.',
      image: '../../../../assets/img/home_testimonials/Samala Suhas.png',
      course: 'Data Analytics',
    },
    {
      name: 'KNV Ram',
      content:
        'At the academy where he completed courses, the trainers were incredibly friendly, and the quality of teaching was top-notch. They delved deeply into every topic, ensuring comprehensive coverage.',
      image: '../../../../assets/img/home_testimonials/KNV Ram.png',
      course: 'AutoCAD, BIM (Revit), 3DS Max & Sketchup',
    },
    {
      name: 'Yashoda Ram',
      content:
        'The curriculum is comprehensive and up-to-date, covering everything from Java fundamentals to building full stack applications.',
      image: '../../../../assets/img/home_testimonials/Yashoda Ram.png',
      course: 'Full Stack Java ',
    },
    {
      name: 'Rajitha',
      content:
        'From learning the basics to diving into more advanced topics, the instructors were so knowledgeable and patient.',
      image: '../../../../assets/img/home_testimonials/Rajitha.png',
      course: 'Full Stack Java ',
    },
    {
      name: 'Harshita',
      content:
        'Industry-relevant curriculum that prepares you for the job market',
      image: '../../../../assets/img/home_testimonials/Harshita.png',
      course: 'Full Stack Development ',
    },
    {
      name: 'Nithish Kumar',
      content:
        'I learned everything from front-end to back-end development and even got to work on real-world projects.',
      image: '../../../../assets/img/home_testimonials/Nithish Kumar.png',
      course: 'Full Stack Development',
    },
    {
      name: 'Ganesh',
      content: 'The hands-on projects really helped solidify my skills',
      image: '../../../../assets/img/home_testimonials/Ganesh.png',
      course: 'Full Stack Java ',
    },
    {
      name: 'Uday Kumar',
      content: 'Internship opportunities to gain practical experience',
      image: '../../../../assets/img/home_testimonials/Uday Kumar.png',
      course: 'Data Science',
    },
  ];

  

  // adding script tag in header
  ngOnInit(): void {
     // script tag
     this.addJsonLdScript();
  }
  
  ngOnDestroy() {
    this.removeJsonLdScript();
  }

  private addJsonLdScript() {
    if (!document.getElementById(this.jsonLdScriptId)) {
      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
    //   script.id = this.jsonLdScriptId;
      script.text = `
      { 
        "@context" : "http://schema.org", 
        "@type" : "Organization", 
        "name" : "Tekscademy", 
        "url" : " https://teksacademy.com/", 
        "sameAs" : [ 
        " https://www.facebook.com/teksacademy",  
        " https://www.instagram.com/teks_academy/",
        " https://twitter.com/TeksAcademy",
        " https://www.linkedin.com/company/teks-academy/",
        " https://www.youtube.com/@teksacademy"]
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

  showContent(index: number) {
    this.activeIndex = index;
  }

  nextTestimonial() {
    if (this.activeIndex < this.testimonialsBig.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; // Loop back to the first testimonial
    }
  }

  prevTestimonial() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.testimonialsBig.length - 1; // Go to the last testimonial
    }
  }

  nextTestimonialSmall() {
    if (this.activeIndex < this.testimonialsSmall.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; // Loop back to the first testimonial
    }
  }

  prevTestimonialSmall() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.testimonialsSmall.length - 1; // Go to the last testimonial
    }
  }
}
