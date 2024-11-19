import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-details-style-one',
  templateUrl: './blog-details-style-one.component.html',
  styleUrls: ['./blog-details-style-one.component.scss'],
})
export class BlogDetailsStyleOneComponent implements OnInit {
  blog: any; // This will hold the blog data fetched from the API
  comments: any[] = []; // Initialize comments
  relatedPosts: any[] = []; // Initialize related posts
  commentForm: FormGroup; // FormGroup to handle comment submission
  apiUrl = environment.apiUrl; // The base API URL from the environment
  successMessage: string | null = null;

  
  constructor(
    private http: HttpClient, // Injecting HttpClient to make HTTP requests
    private route: ActivatedRoute, // Injecting ActivatedRoute to access the route parameters
    private fb: FormBuilder // Injecting FormBuilder for reactive forms
  ) {
    // Initialize the comment form with required fields
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comments: ['', [Validators.required, Validators.maxLength(65525)]],
    });
  }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id'); // Getting the blog ID from the route parameter
    this.fetchBlogDetails(blogId); // Call the method to fetch blog details
    this.fetchComments(blogId); // Fetch comments related to the blog
    this.fetchBlogPosts(); // Fetch blog posts to get related posts
  }

  fetchBlogDetails(blogId: string | null): void {
    if (blogId) {
      this.http.get(`${this.apiUrl}/blogs/getblogbyid/${blogId}`).subscribe(
        (response: any) => {
          this.blog = response.data;
        },
        (error) => {
          console.error('Error fetching blog details:', error);
        }
      );
    }
  }

  // Fetch comments for the current blog post
  fetchComments(blogId: string | null): void {
    if (blogId) {
      this.http.get<any[]>(`${this.apiUrl}/comments/getcomments?blogId=${blogId}`).subscribe(
        (response) => {
          this.comments = response; // Store comments in the component
        },
        (error) => {
          console.error('Error fetching comments:', error);
        }
      );
    }
  }

  // Fetch blog posts to show related posts
  fetchBlogPosts(): void {
    this.http.get<any[]>(`${this.apiUrl}/blogs/getblogs`).subscribe(
      (response) => {
        this.relatedPosts = response.filter(
          (post) => post.category === this.blog?.category && post.id !== this.blog?.id
        ).slice(0, 3); // Limit to 3 related posts
      },
      (error) => {
        console.error('Error fetching blog posts:', error);
      }
    );
  }

  // Method to submit the comment form
  onSubmit(): void {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;
      const blogId = this.route.snapshot.paramMap.get('id');
      
      if (blogId) {
        // Send POST request to submit the comment
        this.http.post(`${this.apiUrl}/comments/createcomment`, { ...formData, blogId }).subscribe(
          (response: any) => {
            // If successful, push the new comment to the list (to display immediately)
            this.comments.unshift({
              name: formData.name,
              email: formData.email,
              comments: formData.comments,
              date: new Date().toLocaleString(),
            });
            this.commentForm.reset(); // Reset the form after submission
          },
          (error) => {
            console.error('Error:', error);
            alert('Failed to post comment.');
          }
        );
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }

  getImageUrl(imageUrl: string): string {
    if (imageUrl && imageUrl.trim()) {
      return `https://teksacademy.s3.ap-south-1.amazonaws.com/website/blogs/${imageUrl}`;
    }
    return 'assets/images/default-image.jpg'; // Fallback image URL
  }
}
