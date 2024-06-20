import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  activeTab: string = 'images';
  ngOnInit(): void {}

  public _album: { src: string; caption: string; thumb: string }[] = [];
  public _autocad: { src: string; caption: string; thumb: string }[] = [];
  public _aws: { src: string; caption: string; thumb: string }[] = [];
  public _dataanalytics: { src: string; caption: string; thumb: string }[] = [];
  public _datascience: { src: string; caption: string; thumb: string }[] = [];
  public _digitalmarketing: { src: string; caption: string; thumb: string }[] =
    [];
  public _fullstackjava: { src: string; caption: string; thumb: string }[] = [];
  public _fullstackpython: { src: string; caption: string; thumb: string }[] =
    [];
  public _iso: { src: string; caption: string; thumb: string }[] = [];
  public _pgdca: { src: string; caption: string; thumb: string }[] = [];
  public _python: { src: string; caption: string; thumb: string }[] = [];
  public _revitbim: { src: string; caption: string; thumb: string }[] = [];
  public _salesforce: { src: string; caption: string; thumb: string }[] = [];
  public _spokenenglish: { src: string; caption: string; thumb: string }[] = [];

  constructor(public _lightbox: Lightbox) {
    for (let i = 1; i <= 7; i++) {
      const src =
        'assets/img/testimonials/fullstackdevelopment/fullstack' + i + '.jpg';
      const caption = ' ';
      const thumb =
        'assets/img/testimonials/fullstackdevelopment/fullstack' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._album.push(album);
    }

    // autocad
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/img/testimonials/autocad/autocad' + i + '.png';
      const caption = '';
      const thumb = 'assets/img/testimonials/autocad/autocad' + i + '.png';
      const autocad = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._autocad.push(autocad);
    }

    // aws
    for (let i = 1; i <= 2; i++) {
      const src = 'assets/img/testimonials/aws/aws' + i + '.jpg';
      const caption = ' ';
      const thumb = 'assets/img/testimonials/aws/aws' + i + '.jpg';
      const aws = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._aws.push(aws);
    }

    // data analytics
    for (let i = 1; i <= 6; i++) {
      const src =
        'assets/img/testimonials/Data Analytics/dataanalytics' + i + '.jpg';
      const caption = ' ';
      const thumb =
        'assets/img/testimonials/Data Analytics/dataanalytics' + i + '.jpg';
      const dataanalytics = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._dataanalytics.push(dataanalytics);
    }

    // data science
    for (let i = 1; i <= 14; i++) {
      const src =
        'assets/img/testimonials/Data Science/datascience' + i + '.jpg';
      const caption = ' ';
      const thumb =
        'assets/img/testimonials/Data Science/datascience' + i + '.jpg';
      const datascience = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._datascience.push(datascience);
    }

    // digital marketing
    for (let i = 1; i <= 5; i++) {
      const src =
        'assets/img/testimonials/Digital Marketing/digitalmarketing' +
        i +
        '.jpg';
      const caption = '';
      const thumb =
        'assets/img/testimonials/Digital Marketing/digitalmarketing' +
        i +
        '.jpg';
      const digitalmarketing = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._digitalmarketing.push(digitalmarketing);
    }

    // full stack java
    for (let i = 1; i <= 3; i++) {
      const src =
        'assets/img/testimonials/Full Stack Java/fullstackjava' + i + '.jpg';
      const caption = ' ';
      const thumb =
        'assets/img/testimonials/Full Stack Java/fullstackjava' + i + '.jpg';
      const fullstackjava = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._fullstackjava.push(fullstackjava);
    }

    // full stack python
    for (let i = 1; i <= 13; i++) {
      const src =
        'assets/img/testimonials/Full Stack Python/fullstackpython' +
        i +
        '.jpg';
      const caption = ' ';
      const thumb =
        'assets/img/testimonials/Full Stack Python/fullstackpython' +
        i +
        '.jpg';
      const fullstackpython = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._fullstackpython.push(fullstackpython);
    }

    // iso
    // for(let i = 1; i <=1; i++){
    //     const src = 'assets/img/testimonials/ISO Programming/iso' + i + '.jpg';
    //     const caption = 'Image ' + i;
    //     const thumb = 'assets/img/testimonials/ISO Programming/iso' + i + '.jpg';
    //     const iso = {
    //         src: src,
    //         caption: caption,
    //         thumb: thumb
    //     };
    //     this._iso.push(iso)
    // }

    // pgdca
    for (let i = 1; i <= 4; i++) {
      const src = 'assets/img/testimonials/PGDCA/pgdca' + i + '.jpg';
      const caption = ' ';
      const thumb = 'assets/img/testimonials/PGDCA/pgdca' + i + '.jpg';
      const pgdca = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._pgdca.push(pgdca);
    }

    // python
    // for(let i = 1; i <=1; i++){
    //     const src = 'assets/img/testimonials/Python/python' + i + '.png';
    //     const caption = 'Image ' + i;
    //     const thumb = 'assets/img/testimonials/Python/python' + i + '.png';
    //     const python = {
    //         src: src,
    //         caption: caption,
    //         thumb: thumb
    //     };
    //     this._python.push(python)
    // }

    // revit bim
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/img/testimonials/Revit BIM/revitbim' + i + '.jpg';
      const caption = ' ';
      const thumb = 'assets/img/testimonials/Revit BIM/revitbim' + i + '.jpg';
      const revitbim = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._revitbim.push(revitbim);
    }

    // salesforce
    // for(let i = 1; i <=1; i++){
    //     const src = 'assets/img/testimonials/Salesforce/salesforce' + i + '.jpg';
    //     const caption = 'Image ' + i;
    //     const thumb = 'assets/img/testimonials/Salesforce/salesforce' + i + '.jpg';
    //     const salesforce = {
    //         src: src,
    //         caption: caption,
    //         thumb: thumb
    //     };
    //     this._salesforce.push(salesforce)
    // }

    // spoken english
    for (let i = 1; i <= 3; i++) {
      const src =
        'assets/img/testimonials/Spoken English/spokenenglish' + i + '.jpg';
      const caption = ' ';
      const thumb =
        'assets/img/testimonials/Spoken English/spokenenglish' + i + '.jpg';
      const spokenenglish = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._spokenenglish.push(spokenenglish);
    }
  }

  //   constructor(public _lightbox: Lightbox) {
  //       for (let i = 1; i <= 12; i++) {
  //           const src = 'assets/img/courses/gimg' + i + '.png';
  //           const caption = 'Image ' + i;
  //           const thumb = 'assets/img/courses/gimg' + i + '.png';
  //           const album = {
  //               src: src,
  //               caption: caption,
  //               thumb: thumb
  //           };
  //           this._album.push(album);
  //       }
  //   }

  // fullstack development
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  // autocad
  autocadopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._autocad, index);
  }

  // autocad
  awsopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._aws, index);
  }

  // autocad
  dataanalyticsopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._dataanalytics, index);
  }

  // data science
  datascienceopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._datascience, index);
  }

  // digital marketing
  digitalmarketingopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._digitalmarketing, index);
  }
  // autocad
  fullstackjavaopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._fullstackjava, index);
  }

  // autocad
  fullstackpythonopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._fullstackpython, index);
  }

  // autocad
  isoopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._iso, index);
  }

  // autocad
  pgdcaopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._pgdca, index);
  }

  // autocad
  pythonopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._python, index);
  }

  // autocad
  revitbimopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._revitbim, index);
  }
  // autocad
  salesforceopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._salesforce, index);
  }
  // autocad
  spokenenglishopen(index: number): void {
    // open lightbox
    this._lightbox.open(this._spokenenglish, index);
  }
}
