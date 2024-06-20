import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-business-analytics',
  templateUrl: './business-analytics.component.html',
  styleUrls: ['./business-analytics.component.scss']
})
export class BusinessAnalyticsComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best Business Analytics course in Hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Join Business Analytics Certification Courses. Upskill yourself with a Business Analytics fast track course. Join Best Business Analytics course in Hyderabad | Teks Academy'});
    const openBtn = document.getElementById('open-form')!;
    const popupForm = document.getElementById('popup-form')!;

    openBtn.addEventListener('click', function() {
      popupForm.style.display = "block";
    });


    popupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
    });

    

      }
}
