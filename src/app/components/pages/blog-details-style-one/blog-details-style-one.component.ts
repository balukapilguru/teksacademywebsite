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
  comments: any[] = []; // Ensure comments is always an array
  relatedPosts: any[] = []; // Initialize related posts
  commentForm: FormGroup; // FormGroup to handle comment submission
  apiUrl = environment.apiUrl; // The base API URL from the environment
  successMessage: string | null = null; // Message to display after form submission

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Initialize the comment form with validation rules
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comments: ['', [Validators.required, Validators.maxLength(65525)]],
    });
  }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.fetchBlogDetails(blogId);  // Fetch blog details when the component loads
      this.fetchComments(blogId);     // Fetch comments based on the blog ID
    }
  }

  // Fetch blog details based on blog ID
  fetchBlogDetails(blogId: string): void {
    this.http.get<any>(`${this.apiUrl}/blogs/getblogbyid/${blogId}`).subscribe(
      (response) => {
        this.blog = response.data;
        this.fetchBlogPosts(); // Fetch related posts after blog details are loaded
      },
      (error) => {
        console.error('Error fetching blog details:', error);
      }
    );
  }

  fetchComments(blogId: string): void {
    // Ensure that we fetch comments specific to the blog ID
    this.http.get<any>(`${this.apiUrl}/comments/comments/${blogId}`).subscribe(
      (response) => {
        console.log('Fetched Comments Response:', response); // Log the response to check
        if (Array.isArray(response)) {
          this.comments = response; // Assign response directly if it's an array
        } else {
          console.error('Unexpected response structure:', response);
          this.comments = []; // Fallback to an empty array
        }
      },
      (error) => {
        console.error('Error fetching comments:', error);
        this.comments = []; // Ensure comments is an empty array in case of error
      }
    );
  }
  

  // Fetch related blog posts based on category
  fetchBlogPosts(): void {
    this.http.get<any[]>(`${this.apiUrl}/blogs/getblogs`).subscribe(
      (response) => {
        if (Array.isArray(response)) {
          if (this.blog) {
            this.relatedPosts = response
              .filter((post) => post.category === this.blog.category && post.id !== this.blog.id)
              .slice(0, 3);
          } else {
            this.relatedPosts = response.slice(0, 3); // Fallback to any 3 posts if blog details are unavailable
          }
        } else {
          console.error('API response is not an array:', response);
        }
      },
      (error) => {
        console.error('Error fetching blog posts:', error);
      }
    );
  }

  // Reset comment form
  resetForm(): void {
    this.commentForm.reset();
    this.commentForm.markAsPristine();
    this.commentForm.markAsUntouched();
    this.commentForm.updateValueAndValidity();
  }

  // Submit the comment form
  onSubmit(): void {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;
      const blogId = this.route.snapshot.paramMap.get('id');

      if (blogId) {
        // Post the new comment to the server
        this.http.post(`${this.apiUrl}/comments/createcomment`, { ...formData, blogId }).subscribe(
          (response: any) => {
            // If the comment is posted successfully, add it to the top of the comments list
            if (Array.isArray(this.comments)) {
              this.comments.unshift({
                name: formData.name,
                email: formData.email,
                comments: formData.comments,
                date: new Date().toLocaleString(),
              });
            }

            // Reset the form and display a success message
            this.resetForm();
            this.successMessage = 'Your comment has been posted successfully!';
            setTimeout(() => (this.successMessage = null), 3000); // Clear success message after 3 seconds

            // Refetch the comments after posting to ensure fresh data
            this.fetchComments(blogId);
          },
          (error) => {
            console.error('Error posting comment:', error);
            alert('Failed to post comment. Please try again.');
          }
        );
      } else {
        alert('Blog ID not found.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }

  // Get image URL with a fallback image if it's not available
  getImageUrl(imageUrl: string): string {
    if (imageUrl && imageUrl.trim()) {
      return `https://teksacademy.s3.ap-south-1.amazonaws.com/website/blogs/${imageUrl}`;
    }
    return 'assets/images/default-image.jpg'; // Fallback image URL
  }
}
