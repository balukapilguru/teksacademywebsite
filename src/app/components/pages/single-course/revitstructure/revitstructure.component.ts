import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-revitstructure',
  templateUrl: './revitstructure.component.html',
  styleUrls: ['./revitstructure.component.scss']
})
export class RevitstructureComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
     // set the title
     this.titleService.setTitle('Visit us to Get the best Revit structure course in Hyderabad');

     // set meta description
     this.metaService.addTag({name: 'description', content: 'Architectural Structures are most important in Designings, So Teks Academy is Providing the Best Revit Structure course in Hyderabad with Placement Assistance.'});
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
