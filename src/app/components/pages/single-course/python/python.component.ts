import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best Python course in hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Enroll and learn python course. Gain knowledge from the experts and become professional python developer. Join Best Python course in hyderabad | Teks Academy'});
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
