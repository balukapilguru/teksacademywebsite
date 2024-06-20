import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.scss']
})
export class DevopsComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Get the Best DevOps & Internship - Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Best DevOps course in Hyderabad.'});
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
