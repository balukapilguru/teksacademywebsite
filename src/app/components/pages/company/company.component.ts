import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError, finalize } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  data: any[] = [];
  initialData: any[] = [];
  isLoading = false;
  apiUrl = environment.apiUrl;
  currentPage = 1;
  itemsPerPage = 10; // Default page size set to 10 items per page
  totalItems = 0;
  totalPages = 0;
  pageNumbers: number[] = [];
  pageSizes: number[] = [10, 20, 30]; // Example page sizes array
  private searchSubscription: Subscription | undefined;
  private currentSearchTerm: string = '';

  
  imagePath: string = 'https://teksacademy.s3.ap-south-1.amazonaws.com/HRM/jobposting_companylogos/';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchJobPostings(this.currentPage);
    this.setupSearch();
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

  fetchJobPostings(page: number) {
    this.isLoading = true;
    let params: any = {
      page: page.toString(),
      limit: this.itemsPerPage.toString()
    };

    if (this.currentSearchTerm) {
      params['search'] = this.currentSearchTerm;
    }

    this.http.get<any>(`${this.apiUrl}/jobs/job-postings`, { params }).subscribe(
      (response: { reversedjobs: any[], totalJobs: number }) => {
        this.data = response.reversedjobs;
        this.initialData = this.data;
        this.totalItems = response.totalJobs;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching job postings:', error);
        this.isLoading = false;
      }
    );
  }

  setupSearch() {
    this.searchSubscription = this.searchForm.get('search')?.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchTerm: string) => {
          this.currentSearchTerm = searchTerm;
          this.currentPage = 1; // Reset to first page on new search term
          return this.searchJobs(searchTerm, this.currentPage);
        }),
        catchError((error: any) => {
          console.error('Error in search:', error);
          this.isLoading = false;
          return of([]);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (filteredJobs: any[]) => {
          this.data = filteredJobs;
          // Update pagination based on search results
          this.totalItems = filteredJobs.length; // Assuming filteredJobs array contains filtered data
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
          this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        },
        (error: any) => {
          console.error('Error subscribing to filtered data:', error);
        }
      );
  }

  searchJobs(searchTerm: string, page: number) {
    if (!searchTerm) {
      this.data = this.initialData;
      return of(this.data);
    }

    this.isLoading = true;
    let params: any = {
      page: page.toString(),
      limit: this.itemsPerPage.toString(),
      search: searchTerm
    };

    return this.http.get<any>(`${this.apiUrl}/jobs/job-postings`, { params }).pipe(
      switchMap((response: { reversedjobs: any[], totalJobs: number }) => {
        this.totalItems = response.totalJobs;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        return of(response.reversedjobs);
      }),
      catchError((error: any) => {
        console.error('Error filtering data:', error);
        this.isLoading = false;
        return of([]);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  changePage(page: number) {
    this.currentPage = page;
    if (this.currentSearchTerm) {
      this.searchJobs(this.currentSearchTerm, this.currentPage).subscribe(
        (filteredJobs: any[]) => {
          this.data = filteredJobs;
        },
        (error: any) => {
          console.error('Error subscribing to filtered data:', error);
        }
      );
    } else {
      this.fetchJobPostings(this.currentPage);
    }
  }

  changePageSize(newSize: number) {
    this.itemsPerPage = newSize;
    this.fetchJobPostings(this.currentPage); // Reload data with new page size
  }

  // viewDetails(itemId: number) {
  //   this.router.navigate(['/jobdescription', itemId]);
  // }
  viewDetails(jobId: string, companyName: string, jobTitle: string) {
    const formattedCompanyName = companyName.replace(/\s+/g, '-').toLowerCase();
    const formattedJobTitle = jobTitle.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate([`/${formattedCompanyName}/${formattedJobTitle}`]);
  }
  
}
