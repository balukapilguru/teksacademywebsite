import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentverifypage',
  templateUrl: './studentverifypage.component.html',
  styleUrls: ['./studentverifypage.component.scss']
})
export class StudentverifypageComponent implements OnInit {
  studentId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the route parameter
    this.studentId = this.route.snapshot.paramMap.get('id');
    
    // Log the retrieved student ID to console
    console.log('sri', this.studentId);
    
    // You can also subscribe to route parameter changes
    // this.route.paramMap.subscribe(params => {
    //   this.studentId = params.get('id');
    //   console.log('Updated student ID:', this.studentId);
    // });
  }
}
