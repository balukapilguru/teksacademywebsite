import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

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

  blogsData: BlogData[] = []; // Array to hold the fetched blogs data
  originalBlogsData: BlogData[] = []; // Backup of original data
  uniqueCategories: string[] = []; // Array to hold unique categories for filtering
  searchQuery: string = ''; // For search functionality
  totalBlogs: number = 0; // Total number of blogs fetched
  pageSize: number = 5; // Number of blogs per page
  currentPage: number = 1; // Current page number
  startBlogs: number = 0; // Start index for displaying blogs
  endBlogs: number = 0; // End index for displaying blogs

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

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchBlogsData(); // Fetch blogs data when the component is initialized
  }

  // Function to fetch blogs data from the API
  // fetchBlogsData(): void {
  //   this.http.get<{ blogsdata: Array<BlogData> }>(`${this.apiUrl}/blogs/getblogs`).subscribe(
  //     (response) => {
  //       this.blogsData = response.blogsdata; // Assign fetched data to blogsData
  //       this.originalBlogsData = [...response.blogsdata]; // Backup original data
  //       this.totalBlogs = response.blogsdata.length; // Set total number of blogs based on the fetched data
  //       this.updateBlogRange(); // Update the range of blogs being displayed based on pagination

  //       // Extract unique categories from the blogsData
  //       this.uniqueCategories = [
  //         ...new Set(response.blogsdata.filter(blog => blog.category).map(blog => blog.category)),
  //       ];
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert('Failed to fetch blogs. Please try again later.'); // User feedback
  //       console.error('Error fetching blog posts:', error.message);
  //     }
  //   );
  // }
  fetchBlogsData(): void {
    this.http.get<{ blogsdata: Array<BlogData> }>(`${this.apiUrl}/blogs/getblogs`).subscribe(
      (response) => {
        this.blogsData = response.blogsdata;
        this.originalBlogsData = [...response.blogsdata];
        this.totalBlogs = response.blogsdata.length;
        this.updateBlogRange();
  
        // Debug unique categories
        this.uniqueCategories = [
          ...new Set(
            response.blogsdata.map((blog) =>
              blog.category ? blog.category.trim() : 'Uncategorized'
            )
          ),
        ];
        console.log('Fetched Blogs:', response.blogsdata);
        console.log('Unique Categories:', this.uniqueCategories);
      },
      (error: HttpErrorResponse) => {
        alert('Failed to fetch blogs. Please try again later.');
        console.error('Error fetching blog posts:', error.message);
      }
    );
  }
  
  filterByCategory(category: string): void {
    console.log('Selected Category:', category); // Debug selected category
    this.router.navigate(['/blogcategory', category]);
  }
  

  onSearch(event: Event): void {
    event.preventDefault(); // Prevent form submission if triggered by "Enter" key
  
    const trimmedQuery = this.searchQuery.trim();
  
    if (trimmedQuery) {
      // Fetch filtered blogs based on the search query
      this.http
        .get<{ blogsdata: Array<BlogData> }>(
          `${this.apiUrl}/blogs/getblogs?searchQuery=${encodeURIComponent(trimmedQuery)}`
        )
        .subscribe(
          (response) => {
            this.blogsData = response.blogsdata; // Update blogs with filtered results
            this.totalBlogs = this.blogsData.length; // Update total blogs count
            this.currentPage = 1; // Reset to first page
            this.updateBlogRange(); // Update displayed range
          },
          (error: HttpErrorResponse) => {
            console.error('Error fetching search results:', error.message);
            alert('Error fetching search results. Please try again later.');
          }
        );
    } else {
      // Reset to the original blogs data if search query is empty
      this.blogsData = [...this.originalBlogsData];
      this.totalBlogs = this.blogsData.length;
      this.currentPage = 1;
      this.updateBlogRange();
    }
  }
  
  

  // Function to update the range of blogs displayed based on pagination
  updateBlogRange(): void {
    // Recalculate the start and end blogs based on current page and filtered data
    this.startBlogs = (this.currentPage - 1) * this.pageSize;
    this.endBlogs = Math.min(this.currentPage * this.pageSize, this.blogsData.length);
  }

  // Get total number of pages based on the number of blogs and page size
  get totalPages(): number {
    return Math.ceil(this.totalBlogs / this.pageSize);
  }

  // Function to go to a specific page based on the page number
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page; // Set current page
      this.updateBlogRange(); // Update the range of blogs being displayed
    }
  }

  // Function to construct the full URL for images
  getImageUrl(imageUrl: string): string {
    if (imageUrl && imageUrl.trim()) {
      return `https://teksacademy.s3.ap-south-1.amazonaws.com/website/blogs/${imageUrl}`; // Assuming image is stored in this S3 path
    }
    return 'assets/images/default-image.jpg'; // Fallback image URL if imageUrl is not provided
  }

  // Generate the page numbers for pagination
  paginationArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1); // Create an array of page numbers
  }
}
