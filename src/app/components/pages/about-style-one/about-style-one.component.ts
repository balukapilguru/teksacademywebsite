import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-about-style-one',
  templateUrl: './about-style-one.component.html',
  styleUrls: ['./about-style-one.component.scss'],
})
export class AboutStyleOneComponent implements OnInit {
  private jsonLdScriptId = 'json-ld-about';
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // set the title
    this.titleService.setTitle(
      'Best IT courses training Institute | Hyderabad | Online & Offline'
    );

    // set the description
    this.metaService.updateTag({
      name: 'description',
      content:'Join at Teks Academy  IT Courses Training Institute Hyderabad. Offering 30 plus IT, Non-IT courses. Expert Faculty |Updated curriculum | 100% job assistance.',
    });

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
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Teksacademy",
            "image": " https://teksacademy.com/assets/img/dboyvideo.png ",
            "@id": " https://teksacademy.com/about-us ",
            "url": " https://teksacademy.com/about-us ",
            "telephone": "1800-120-4748",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. 30, 3rd Floor, Cyber Heights",
              "addressLocality": "Dilsukhnagar-Hyderabad. Secunderabad-Hyderabad. Ameerpet-Hyderabad. Kukatpally-hyderabad. Hitech city-Hyderabad",
              "postalCode": "500081",
              "addressCountry": "In",
              "addressRegion": "Telangana"
            },
            "priceRange": "20000",
            "sameAs": [
              " https://www.facebook.com/teksacademy ",
              " https://twitter.com/TeksAcademy ",
              " https://www.youtube.com/@teksacademy ",
              " https://www.linkedin.com/company/teks-academy "
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            ]
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
}
