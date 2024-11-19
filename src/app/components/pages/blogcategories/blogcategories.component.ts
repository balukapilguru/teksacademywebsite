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

  fetchBlogData(): void {
    this.http.get<{ blogsdata: BlogPost[] }>(this.apiUrl).subscribe((response) => {
      this.blogs = response.blogsdata;
  
      // Debug unique categories
      this.categories = [
        ...new Set(
          this.blogs.map((blog) =>
            blog.category ? blog.category.trim() : 'Uncategorized'
          )
        ),
      ];
      console.log('Fetched Blogs:', this.blogs);
      console.log('Unique Categories:', this.categories);
  
      this.applyCategoryFilter();
    });
  }
  
  applyCategoryFilter(): void {
    if (this.category) {
      this.filteredBlogs = this.blogs
        .filter((blog) => blog.category === this.category)
        .sort((a, b) => new Date(b.postdate).getTime() - new Date(a.postdate).getTime());
    } else {
      this.filteredBlogs = this.blogs;
    }
  }


  
  filterByCategory(category: string): void {
    // Navigate to the selected category
    this.router.navigate(['/blogcategory', category]);
  }

  // Function to construct the full URL for images
  getImageUrl(imageUrl: string): string {
    if (imageUrl && imageUrl.trim()) {
      return `https://teksacademy.s3.ap-south-1.amazonaws.com/website/blogs/${imageUrl}`;
    }
    return 'assets/default-image.jpg'; // Fallback image URL
  }
}

