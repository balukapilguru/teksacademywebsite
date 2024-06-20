import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-auto-cad',
  templateUrl: './auto-cad.component.html',
  styleUrls: ['./auto-cad.component.scss']
})
export class AutoCADComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best AutoCAD learning institute in Hyderabad - Teks Academy');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Want to become an Autocad professional? Looking for the Best AutoCAD course certification online and offline? Join the Teks Academy to become an expert.'});
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
