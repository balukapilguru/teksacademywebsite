import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best Tableau Course in hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Retrieving data. Wait a few seconds and try to cut or copy again.'});
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
