import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-primavera',
  templateUrl: './primavera.component.html',
  styleUrls: ['./primavera.component.scss']
})
export class PrimaveraComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Primavera course training in Hyderabad - Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Looking to Build your carrier in primavera. Upgrade your skills and get trained by experts in primavera course training in Hyderabad. - Teks Academy'});
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
