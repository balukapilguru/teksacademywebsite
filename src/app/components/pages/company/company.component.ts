import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  data: any[] = [];
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Dummy API

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
