import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-cplusplus',
  templateUrl: './cplusplus.component.html',
  styleUrls: ['./cplusplus.component.scss']
})
export class CplusplusComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best c++ course certification in Hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'This course will take you from basic knowledge of c++ to advanced features. Best c++ course certification in Hyderabad | Teks Academy'});
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
