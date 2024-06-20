import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-ielts',
  templateUrl: './ielts.component.html',
  styleUrls: ['./ielts.component.scss']
})
export class IeltsComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best IELTS training course in Hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Learn understand and upskill your IELTS skills by getting trained from experts. the Best IELTS training course in Hyderabad | Teks Academy'});
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
