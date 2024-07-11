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
  notVerified: boolean = false;

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
        if (data.error === 'Student not found') {
          this.notFound = true;
        } else if (data.error === 'Not Verified') {
          this.notVerified = true;
        } else {
          // Transform the dates if needed
          this.studentData = data;
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching student data:', error);
        if (error.status === 404) {
          this.notFound = true;
        } else {
          // Handle other errors as needed
          this.notFound = true; // Assuming a generic error message
        }
        this.isLoading = false;
      }
    );
  }
}
