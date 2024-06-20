import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.scss']
})
export class PowerBIComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
     // set the title
     this.titleService.setTitle('Best power BI course in Hyderabad | Teks Academy');

     // set meta description
     this.metaService.addTag({name: 'description', content: 'Learn Power BI programme from experts and get hands on analytics. Learn the business analytics from the Best power BI course in Hyderabad | Teks Academy'});
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
