import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-revit',
  templateUrl: './revit.component.html',
  styleUrls: ['./revit.component.scss']
})
export class RevitComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best Revit Course with Certificate - Teks Academy - Hyderabad');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Improve your architectural skills by doing the Best Revit course in Hyderabad and Gain practical skills from Instructors from Teks academy'});
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
