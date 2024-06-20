import { Component } from '@angular/core';


@Component({
  selector: 'app-reactjs',
  templateUrl: './reactjs.component.html',
  styleUrls: ['./reactjs.component.scss']
})
export class ReactjsComponent {
  
  ngOnInit(): void {
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
