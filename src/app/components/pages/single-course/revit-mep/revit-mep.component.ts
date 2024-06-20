import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-revit-mep',
  templateUrl: './revit-mep.component.html',
  styleUrls: ['./revit-mep.component.scss']
})
export class RevitMepComponent {
  
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best Revit Mep course at Teks Academy in Hyderabad');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Learn Electrical, Plumbing, Fire Protection/Sprinkler, and FP Modelling tools. Here you will get the Best Revit MEP course in Hyderabad provided by Teks Academy'});
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
