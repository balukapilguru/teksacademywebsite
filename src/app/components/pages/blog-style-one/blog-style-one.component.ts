import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

interface BlogData {
  id: number;
  image_url: string;
  title: string;
  description: string;
  category: string;
  postdate: number;
  postedtags: string;
  meta_title: string;
  meta_description: string;
  meta_url: string;
  createdAt: number;
  updatedAt: number;
  relatedImages?: string[];
}

@Component({
  selector: 'app-blog-style-one',
  templateUrl: './blog-style-one.component.html',
  styleUrls: ['./blog-style-one.component.scss'],
})
export class BlogStyleOneComponent implements OnInit {
  apiUrl = environment.apiUrl; // API URL from environment

  originalBlogsData: BlogData[] = [];
  blogsData: BlogData[] = []; // Array of blogs
  totalBlogs: number = 0; // Total number of blogs
  pageSize: number = 9; // Number of blogs per page
  currentPage: number = 1; // Current page number
  startBlogs: number = 0; // Starting index for the current page
  endBlogs: number = this.pageSize; // Ending index for the current page
  uniqueCategories: string[] = []; // Categories for filtering
  searchQuery: string = '';
  
  displayedBlogs: BlogData[] = [];
  trainerSlides = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    nav: true,
    margin: 10,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchBlogsData(); // Fetch blogs on component initialization
  }

  fetchBlogsData(): void {
    const params = {
      currentPage: this.currentPage.toString(),
      pageSize: this.pageSize.toString(),
    };

 

    this.http
      .get<{ blogsdata: BlogData[]; totalBlogs: number }>(`${this.apiUrl}/blogs/getblogs`, { params })
      .subscribe(
        (response) => {
          console.log('API Response:', response);

          this.blogsData = response.blogsdata || [];
          this.totalBlogs = response.totalBlogs || 0;

          console.log('Total Blogs:', this.totalBlogs);
          console.log('Blogs Data:', this.blogsData);

          this.updateBlogRange();
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching blogs:', error.message);
          alert('Failed to fetch blogs. Please try again.');
        }
      );
  }

  goToPage(currentPage: number): void {
    this.currentPage = currentPage;
    console.log('Navigating to page:', currentPage);

    this.fetchBlogsData();
    this.updateBlogRange();
  }

  filterByCategory(category: string): void {
    this.router.navigate(['/blogcategory', category]);
  }

  onSearch(event: Event): void {
    event.preventDefault();
    const trimmedQuery = this.searchQuery.trim();

    if (trimmedQuery) {
      const params = {
        searchQuery: trimmedQuery,
        currentPage: this.currentPage.toString(),
        pageSize: this.pageSize.toString(),
      };

      console.log('Searching with params:', params);

      this.http
        .get<{ blogsdata: BlogData[]; totalBlogs: number }>(`${this.apiUrl}/blogs/getblogs`, { params })
        .subscribe(
          (response) => {
            console.log('Search API Response:', response);

            this.blogsData = response.blogsdata || [];
            this.totalBlogs = response.totalBlogs || 0;

            this.updateBlogRange();
          },
          (error: HttpErrorResponse) => {
            console.error('Error fetching search results:', error.message);
            alert('Error fetching search results. Please try again.');
          }
        );
    } else {
      this.resetBlogs(); // Refetch all blogs if no search query
    }
  }

  resetBlogs(): void {
    console.log('Resetting blogs to original data...');
    this.currentPage = 1;
    this.fetchBlogsData();
  }

  updateBlogRange(): void {
    // console.log('Updating blog range...');
    // console.log('Current Page:', this.currentPage, 'Page Size:', this.pageSize);

    const startBlogs = (this.currentPage - 1) * this.pageSize;
    const endBlogs = Math.min(startBlogs + this.pageSize, this.totalBlogs);

    // console.log('Start Index:', startBlogs, 'End Index:', endBlogs);
  
    this.displayedBlogs = this.blogsData.slice(startBlogs, endBlogs);
    // console.log('Displayed Blogs:', this.displayedBlogs);
  }

  get totalPages(): number {
    return Math.ceil(this.totalBlogs / this.pageSize);
  }

  paginationArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  getImageUrl(imageUrl: string): string {
    if (imageUrl && imageUrl.trim()) {
      return `https://teksacademy.s3.ap-south-1.amazonaws.com/website/blogs/${imageUrl}`;
    }
    return 'assets/images/default-image.jpg';
  }
}
