import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-sketching',
  templateUrl: './sketching.component.html',
  styleUrls: ['./sketching.component.scss']
})
export class SketchingComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best Sketching course training in Hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Learn Sketching course and become an expert. Get in depth knowledge and become a master. Best Sketching course  training in Hyderabad | Teks Academy'});
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
