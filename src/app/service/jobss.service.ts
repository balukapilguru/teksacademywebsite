import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobssService {
  private apiUrl = 'https://apiadmin.infozit.com/jobs/job-postings';

  constructor(private http: HttpClient) { }

  getJobPostings(params: any): Observable<any> {
    let queryParams = new HttpParams();
    for (const key in params) {
      if (params[key] !== undefined && params[key] !== null) {
        queryParams = queryParams.set(key, params[key]);
      }
    }

    console.log('API Call with queryParams:', queryParams.toString()); // Debug log

    return this.http.get<any>(this.apiUrl, { params: queryParams });
  }
}
