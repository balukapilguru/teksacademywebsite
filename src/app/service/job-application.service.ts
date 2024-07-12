import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
interface JobApplication {
  id: number;
  application_id: string | null;
  job_posting_id: number;
  applicant_name: string;
  applicant_email: string;
  applicant_phone: string;
  applicant_teksenrollmentid: string;
  resume: string;
  cover_letter: string | null;
  status: string;
  applied_date: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  getJobPostings(params: { page: number; pageSize: number; search: string; 'filter[job_type]': string; 'filter[workplace_type]': string; 'filter[experience]': string; }) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  submitApplication(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/jobs/apply', formData);
  }



  getJobApplications(): Observable<{ applications: JobApplication[] }> {
    return this.http.get<{ applications: JobApplication[] }>(this.apiUrl+'/jobs/applications');
  }

  // getJob(): Observable<any> {
  //   return this.http.get<{ applications: JobApplication[] }>(this.apiUrl+'/jobs/job-postings');
  // }
  getJobListings(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/jobs/job-postings');
  }
}