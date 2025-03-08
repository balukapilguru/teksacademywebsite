import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JobssService {
  apiurl = environment.apiUrl;
  //private apiUrl = 'https://apiadmin.infozit.com/jobs/job-postings';

  constructor(private http: HttpClient) { }

  getJobPostings(params: any): Observable<any> {
    let queryParams = new HttpParams();
    for (const key in params) {
      if (params[key] !== undefined && params[key] !== null) {
        queryParams = queryParams.set(key, params[key]);
      }
    }

    console.log('API Call with queryParams:', queryParams.toString()); // Debug log

    return this.http.get<any>(environment.apiUrl +  `/jobs/job-postings`, { params: queryParams });
  }
}
