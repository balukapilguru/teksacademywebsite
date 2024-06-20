import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-threedsmax',
  templateUrl: './threedsmax.component.html',
  styleUrls: ['./threedsmax.component.scss']
})
export class ThreedsmaxComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
     // set the title
     this.titleService.setTitle('Best 3ds max Course with Certificate - Teks Academy - Hyderabad');

     // set meta description
     this.metaService.addTag({name: 'description', content: 'Improve your architectural skills by doing the Best 3ds max course in Hyderabad and Gain practical skills from Instructors from Teks academy'});
    const openBtn = document.getElementById('open-form')!;
const popupForm = document.getElementById('popup-form')!;

openBtn.addEventListener('click', function() {
  popupForm.style.display = "block";
});

popupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Process form data here
  popupForm.style.display = 'none';
});



  }
}
