import { Component } from '@angular/core';

@Component({
  selector: 'app-slp-digital-marketing',
  templateUrl: './slp-digital-marketing.component.html',
  styleUrls: ['./slp-digital-marketing.component.scss']
})
export class SlpDigitalMarketingComponent {
  showCourseList1 = false;
  showCourseList2 = false;
  showCourseList3 = false;
  showCourseList4 = false;
  showCourseList5 = false;

  toggleCourseList1() {
    this.showCourseList1 = !this.showCourseList1;
  }
  toggleCourseList2() {
    this.showCourseList2 = !this.showCourseList2;
  }
  toggleCourseList3() {
    this.showCourseList3 = !this.showCourseList3;
  }
  toggleCourseList4() {
    this.showCourseList4 = !this.showCourseList4;
  }
  toggleCourseList5() {
    this.showCourseList5 = !this.showCourseList5;
  }
}
