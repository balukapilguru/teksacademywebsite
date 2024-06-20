import { Component } from '@angular/core';

@Component({
  selector: 'app-slp-pgdca',
  templateUrl: './slp-pgdca.component.html',
  styleUrls: ['./slp-pgdca.component.scss']
})
export class SlpPgdcaComponent {
  showCourseList1 = false;
  showCourseList2 = false;
  showCourseList3 = false;
  showCourseList4 = false;
  showCourseList5 = false;
  showCourseList6 = false;

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
  toggleCourseList6() {
    this.showCourseList5 = !this.showCourseList5;
  }
}
