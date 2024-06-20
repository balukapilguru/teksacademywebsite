import { Component, OnInit } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser'
@Component({
  selector: 'app-courses-style-one',
  templateUrl: './courses-style-one.component.html',
  styleUrls: ['./courses-style-one.component.scss']
})
export class CoursesStyleOneComponent implements OnInit {
  selectedSort: string = 'viewall';
  searchText: string = '';

  onSortSelectChange(event: any){
    this.selectedSort = event.target.value;
  }

  courses = [
    { name: 'node js'},
    { name: 'hvac'}
  ]

  get filteredCourses() {
    return this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  constructor(private titleService: Title, private metaService: Meta) { }
  // searchQuery: string = '';
  // filteredCourses: any[];

  // // Rest of your component code

  // filterCourses() {
  //   if (this.searchQuery) {
  //     this.filteredCourses = this.courses.filter(course =>
  //       course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   } else {
  //     this.filteredCourses = this.courses;
  //   }
  // }
  ngOnInit(): void {
    // set title
    this.titleService.setTitle('Best Trending Courses with 100% Job support | Teks Academy.');

    // set meta description
    this.metaService.addTag({name: 'description', content: 'Want to build your career with Trending courses in the market? Teks academy is the only Platform where you get all the Technical Skills under one Roof. (151)'})
    
  }

}
