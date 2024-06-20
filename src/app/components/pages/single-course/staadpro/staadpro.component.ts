import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-staadpro',
  templateUrl: './staadpro.component.html',
  styleUrls: ['./staadpro.component.scss']
})
export class StaadproComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Learn the Best staad pro Course in Hyderabad');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Teks Academy is providing the Best staad pro Course in Hyderabad. Gain knowledge and Become a certified staad pro professional .'});
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
