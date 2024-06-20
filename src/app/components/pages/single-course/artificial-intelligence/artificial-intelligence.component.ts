import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-artificial-intelligence',
  templateUrl: './artificial-intelligence.component.html',
  styleUrls: ['./artificial-intelligence.component.scss']
})
export class ArtificialIntelligenceComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Artificial Intelligence training and certification in Hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Join enroll and upskill yourself with an Artificial Intelligence course.  Become an expert in AWS. Artificial Intelligence training and certification course in Hyderabad | Teks Academy'});
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
