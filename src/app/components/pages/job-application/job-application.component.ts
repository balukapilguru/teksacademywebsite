import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobPosting } from 'src/app/Model/jobposting';
import { JobApplicationService } from 'src/app/service/job-application.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {

  jobPostings: JobPosting[] = [];
  itemsPerPageOptions = [10, 20, 50, 100];
  selectedItemsPerPage = 10;
  currentPage = 1;
  searchTerm = '';
  isLoading = true;
  imagePath: string = 'https://teksacademy.s3.ap-south-1.amazonaws.com/HRM/jobposting_companylogos/';
  constructor(private jobService: JobApplicationService, private router: Router) { }

  ngOnInit() {
    this.jobService.getJobListings().subscribe(data => {
      this.jobPostings = data.reversedjobs;
      this.isLoading = false;
    });
  }

  get totalItems(): number {
    return this.filteredJobPostings.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.selectedItemsPerPage);
  }

  get filteredJobPostings(): JobPosting[] {
    if (!this.searchTerm) {
      return this.jobPostings;
    }
    return this.jobPostings.filter(job =>
      Object.values(job).some(val =>
        (typeof val === 'string' && val.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (Array.isArray(val) && val.some(skill => skill.name.toLowerCase().includes(this.searchTerm.toLowerCase())))
      )
    );
  }

  get paginatedJobPostings(): JobPosting[] {
    const start = (this.currentPage - 1) * this.selectedItemsPerPage;
    const end = start + this.selectedItemsPerPage;
    const filtered = this.filteredJobPostings;
    if (Array.isArray(filtered)) {
      return filtered.slice(start, end);
    } else {
      return [];
    }
  }

  onItemsPerPageChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedItemsPerPage = +value;
    this.currentPage = 1;
  }

  onPageChange(newPage: number) {
    if (newPage > 0 && newPage <= this.totalPages) {
      this.currentPage = newPage;
    }
  }

  onSearchTermChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
    this.currentPage = 1;
  }

  viewDetails(jobId: string, companyName: string, jobTitle: string) {
    const formattedCompanyName = companyName.replace(/\s+/g, '-').toLowerCase();
    const formattedJobTitle = jobTitle.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate([ jobId, `${formattedCompanyName}/${formattedJobTitle}`]);
  }
}
