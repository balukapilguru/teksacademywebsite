import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-studentverifypage',
  templateUrl: './studentverifypage.component.html',
  styleUrls: ['./studentverifypage.component.scss'],
  providers: [DatePipe] // Add DatePipe to providers
})
export class StudentverifypageComponent implements OnInit {
  apiUrl: string = 'https://apierp.infozit.com';
  registrationNumber: string | null = null;
  studentData: any = null;
  isLoading: boolean = true;
  notFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private datePipe: DatePipe // Inject DatePipe
  ) {}

  ngOnInit(): void {
    // Retrieve the route parameter
    this.registrationNumber = this.route.snapshot.paramMap.get('registrationnumber');
    if (this.registrationNumber) {
      this.fetchStudentData(this.registrationNumber);
    }
  }

  fetchStudentData(registrationNumber: string): void {
    const apiUrl = `${this.apiUrl}/sc/verifiycertificate/${registrationNumber}`;
    this.http.get<any>(apiUrl).subscribe(
      data => {
        if (data.error && data.error === 'Student not found') {
          this.notFound = true;
        } else {
          // Transform the dates
          data.courseStartDate = this.datePipe.transform(data.courseStartDate, 'dd-MM-yyyy');
          data.courseEndDate = this.datePipe.transform(data.courseEndDate, 'dd-MM-yyyy');
          this.studentData = data;
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching student data:', error);
        this.notFound = true;
        this.isLoading = false;
      }
    );
  }
}
