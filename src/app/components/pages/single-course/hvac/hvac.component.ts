import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-hvac',
  templateUrl: './hvac.component.html',
  styleUrls: ['./hvac.component.scss']
})
export class HvacComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Learn HVAC course in Hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Enroll and learn HVAC course. Gain knowledge from the experts and become professional HVAC. Join Best HVAC course in hyderabad | Teks Academy'});
    const openBtn = document.getElementById('open-form')!;
const popupForm = document.getElementById('popup-form')!;
 
openBtn.addEventListener('click', function() {
  popupForm.style.display = "block";
});

popupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Process form data here
  popupForm.style.display = 'none';
});



  }
 

}
