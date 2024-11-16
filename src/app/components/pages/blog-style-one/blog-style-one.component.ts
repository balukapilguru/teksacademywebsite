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
  uniqueCategories: string[] = []; // Array to hold unique categories for filtering
  searchQuery: string = ''; // For search functionality
  totalBlogs: number = 10; // Total number of blogs to display (based on API data)
  pageSize: number = 9; // Number of blogs per page
  currentPage: number = 1; // Current page number
  startBlogs: number = 0; // Start index for displaying blogs
  endBlogs: number = 0; // End index for displaying blogs

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
  //   this.http.get<{blogsdata:Array<BlogData>}>(`${this.apiUrl}/blogs/getblogs`).subscribe(
  //     (response) => {
  //       this.blogsData = response.blogsdata; 
  //       this.totalBlogs = response.blogsdata.length; 
  //       this.updateBlogRange(); 
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error('Error fetching blog posts:', error.message);
  //     }
  //   );
  // }
fetchBlogsData(): void {
  this.http.get<{ blogsdata: Array<BlogData> }>(`${this.apiUrl}/blogs/getblogs`).subscribe(
    (response) => {
      this.blogsData = response.blogsdata; // Assign fetched data to blogsData
      this.totalBlogs = response.blogsdata.length; // Set total number of blogs based on the fetched data
      this.updateBlogRange(); // Update the range of blogs being displayed based on pagination

      // Extract unique categories from the blogsData
      this.uniqueCategories = [
        ...new Set(response.blogsdata.filter(blog => blog.category).map(blog => blog.category)),
      ];
    },
    (error: HttpErrorResponse) => {
      console.error('Error fetching blog posts:', error.message); // Log errors if API call fails
    }
  );
}

  // Search functionality to filter blogs based on the title
  onSearch(): void {
    const filteredPosts = this.blogsData.filter((post) =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.totalBlogs = filteredPosts.length; // Update total blogs after filtering
    this.blogsData = filteredPosts; // Set filtered blogs data
    this.updateBlogRange(); // Update the range based on pagination
  }

  // Filter blogs by category
  filterByCategory(category: string): void {
    const filteredPosts = this.blogsData.filter((post) => post.category === category);
    this.totalBlogs = filteredPosts.length; // Update total blogs after filtering
    this.blogsData = filteredPosts; // Set filtered blogs data
    this.updateBlogRange(); // Update the range based on pagination
  }

  // Update the range of blogs being displayed on the current page
  updateBlogRange(): void {
    this.startBlogs = (this.currentPage - 1) * this.pageSize + 1;
    this.endBlogs = Math.min(this.currentPage * this.pageSize, this.totalBlogs);
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
    if (imageUrl) {
      return `https://teksacademy.s3.ap-south-1.amazonaws.com/website/blogs/${imageUrl}`; // Assuming image is stored in this S3 path
    }
    return 'path/to/default/image.jpg'; // Fallback image URL if imageUrl is not provided
  }

  // Generate the page numbers for pagination
  paginationArray(): number[] {
    return Array(Math.ceil(this.totalBlogs / this.pageSize))
      .fill(0)
      .map((_, index) => index + 1); // Create an array of page numbers
  }

  // Carousel settings for displaying featured blogs
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
}
