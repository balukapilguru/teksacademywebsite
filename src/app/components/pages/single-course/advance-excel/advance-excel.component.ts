import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-advance-excel',
  templateUrl: './advance-excel.component.html',
  styleUrls: ['./advance-excel.component.scss']
})
export class AdvanceExcelComponent {
  constructor(private titleService: Title, private metaService: Meta) { }


  ngOnInit(): void {
    // set the title
    this.titleService.setTitle('Best advanced Excel Course in hyderabad | Teks Academy');

    // set meta description
    this.metaService.addTag({ name: 'description', content: 'Learn and understand advanced Excel from experts. Gain knowledge in data. Become a certified Advanced Excel professional. Best Advanced Excel course in hyderabad | Teks Academy' });
    const openBtn = document.getElementById('open-form')!;
    const popupForm = document.getElementById('popup-form')!;

    openBtn.addEventListener('click', function () {
      popupForm.style.display = "block";
    });


    popupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Process form data here
      // popupForm.style.display = 'none';
    });



  }
}
