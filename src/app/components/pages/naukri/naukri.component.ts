import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobPosting } from 'src/app/Model/jobposting';
import { JobssService } from 'src/app/service/jobss.service';

@Component({
  selector: 'app-naukri',
  templateUrl: './naukri.component.html',
  styleUrls: ['./naukri.component.scss']
})
export class NaukriComponent implements OnInit {
  jobPostings: JobPosting[] = [];
  itemsPerPageOptions = [5, 10, 20, 50, 100];
  selectedItemsPerPage = 10;
  currentPage = 1;
  totalPages = 1;
  searchTerm = '';
  filters = {
    job_type: '',
    workplace_type: '',
    experience: ''
  };
  isLoading = true;
  imagePath: string = 'https://teksacademy.s3.ap-south-1.amazonaws.com/HRM/jobposting_companylogos/';
  shareUrl: string = '';
  copied: boolean = false;

  constructor(private jobService: JobssService, private router: Router) {}

  ngOnInit() {
    this.fetchJobPostings();
  }

  fetchJobPostings() {
    this.isLoading = true;
    const params = {
      page: this.currentPage,
      pageSize: this.selectedItemsPerPage,
      search: this.searchTerm,
      'filter[job_type]': this.filters.job_type,
      'filter[workplace_type]': this.filters.workplace_type,
      'filter[experience]': this.filters.experience
    };

    console.log('Fetching job postings with params:', params);

    this.jobService.getJobPostings(params).subscribe(response => {
      console.log('API Response:', response);
      this.jobPostings = response.reversedjobs || [];
      this.totalPages = response.totalPages || 1;
      this.isLoading = false;
    }, error => {
      console.error('Error fetching job postings:', error);
      this.isLoading = false;
    });
  }

  onSearchChange() {
    this.currentPage = 1;
    this.fetchJobPostings();
  }

  onPageSizeChange() {
    this.currentPage = 1;
    this.fetchJobPostings();
  }

  applyFilters() {
    this.currentPage = 1;
    this.fetchJobPostings();
  }

  clearFilters() {
    this.filters = {
      job_type: '',
      workplace_type: '',
      experience: ''
    };
    this.currentPage = 1;
    this.fetchJobPostings();
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchJobPostings();
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchJobPostings();
    }
  }

  viewDetails(jobId: string, companyName: string, jobTitle: string) {
    const formattedCompanyName = companyName.replace(/\s+/g, '-').toLowerCase();
    const formattedJobTitle = jobTitle.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate([jobId, formattedCompanyName, formattedJobTitle]);
  }

  setShareUrl(job: JobPosting) {
    const formattedCompanyName = job.company_name.replace(/\s+/g, '-').toLowerCase();
    const formattedJobTitle = job.title.replace(/\s+/g, '-').toLowerCase();
    this.shareUrl = `${window.location.origin}/${job.id}/${formattedCompanyName}/${formattedJobTitle}`;
  }


  copyLink() {
    console.log('Copy function called');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.shareUrl).then(() => {
        console.log('Copy command successful');
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 5000); // Clear the copied confirmation after 5 seconds
      }).catch(err => {
        console.error('Error copying link:', err);
        alert('Failed to copy link. Please try manually.');
      });
    } else {
      try {
        const tempInput = document.createElement('input');
        tempInput.style.position = 'absolute';
        tempInput.style.left = '-9999px';
        tempInput.value = this.shareUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(tempInput);
        console.log('Copy command successful:', successful);
        if (successful) {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 5000); // Clear the copied confirmation after 5 seconds
        } else {
          alert('Failed to copy link. Please try manually.');
        }
      } catch (err) {
        console.error('Error copying link:', err);
        alert('Failed to copy link. Please try manually.');
      }
    }
  }
  
}
