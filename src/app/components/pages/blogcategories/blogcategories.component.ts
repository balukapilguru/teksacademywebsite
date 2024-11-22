import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface BlogPost {
  id: number;
  image_url: string;
  title: string;
  description: string;
  category: string;
  postdate: string; // Date in string format
}

@Component({
  selector: 'app-blogcategories',
  templateUrl: './blogcategories.component.html',
  styleUrls: ['./blogcategories.component.scss'],
})
export class BlogcategoriesComponent implements OnInit {
  apiUrl = 'https://mainbackup.teksacademy.com/blogs/getblogs';
  categories: string[] = [];
  blogs: BlogPost[] = [];
  filteredBlogs: BlogPost[] = []; // Filtered blogs by category
  category: string = ''; // Holds the currently selected category
  currentPage: number = 1; // The current page number
  blogsPerPage: number = 9; // Number of blogs per page
  totalPages: number = 1; // Total number of pages

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch blogs and categories
    this.fetchBlogData();

    // Get the category from the route if navigating to a specific category
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || '';
      this.applyCategoryFilter();
    });
  }

  // Fetch all blogs and categories
  fetchBlogData(): void {
    this.http.get<{ blogsdata: BlogPost[] }>(this.apiUrl).subscribe((response) => {
      this.blogs = response.blogsdata;
      
      // Extract unique categories
      this.categories = [
        ...new Set(
          this.blogs.map((blog) => blog.category ? blog.category.trim() : 'Uncategorized')
        ),
      ];
      
      console.log('Fetched Blogs:', this.blogs);
      console.log('Unique Categories:', this.categories);

      // Apply the category filter and paginate blogs
      this.applyCategoryFilter();
      this.paginateBlogs();
    });
  }

  // Apply category filter if any category is selected
  applyCategoryFilter(): void {
    if (this.category) {
      this.filteredBlogs = this.blogs.filter((blog) => blog.category === this.category);
    } else {
      this.filteredBlogs = this.blogs;
    }
    this.paginateBlogs(); // Re-paginate after applying the filter
  }

  // Function to paginate blogs (show 9 blogs per page)
  paginateBlogs(): void {
    const startIndex = (this.currentPage - 1) * this.blogsPerPage;
    const endIndex = startIndex + this.blogsPerPage;
    this.filteredBlogs = this.filteredBlogs.slice(startIndex, endIndex);
    
    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.filteredBlogs.length / this.blogsPerPage);
  }

  // Function to navigate to a specific category page
  filterByCategory(category: string): void {
    this.router.navigate(['/blogcategory', category]);
  }

  // Function to construct the full URL for images
  getImageUrl(imageUrl: string): string {
    if (imageUrl && imageUrl.trim()) {
      return `https://teksacademy.s3.ap-south-1.amazonaws.com/website/blogs/${imageUrl}`;
    }
    return 'assets/default-image.jpg'; // Fallback image URL
  }

  // Navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateBlogs();
    }
  }

  // Navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateBlogs();
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateBlogs();
    }
  }
}
