import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface BlogPost {
  id: number;
  image_url: string;
  title: string;
  category: string;
  createdAt: string;
}

interface Comment {
  author: string;
  email: string;
  comment: string;
  date: string;  
}

@Component({
  selector: 'app-blog-details-style-one',
  templateUrl: './blog-details-style-one.component.html',
  styleUrls: ['./blog-details-style-one.component.scss']
})
export class BlogDetailsStyleOneComponent implements OnInit {
  commentForm: FormGroup;
  apiUrl = environment.apiUrl;
  blogPosts: BlogPost[] = [];
  currentPostId: number = 0;
  comments: Comment[] = [];
  relatedPosts: BlogPost[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder, private route: ActivatedRoute) {
    this.commentForm = this.fb.group({
      author: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPostId = +params['id'];
      this.fetchBlogPosts();
      this.fetchComments();
    });
  }

  fetchBlogPosts() {
    this.http.get<BlogPost[]>(`${this.apiUrl}/blogs/getblogs`)
      .subscribe(
        (response) => {
          this.blogPosts = response;
          this.fetchRelatedPosts();
        },
        (error) => {
          console.error('Error fetching blog posts', error);
        }
      );
  }

  fetchComments() {
    this.http.get<Comment[]>(`${this.apiUrl}/blogs/${this.currentPostId}/comments`)
      .subscribe(
        (response) => {
          this.comments = response;
        },
        (error) => {
          console.error('Error fetching comments', error);
        }
      );
  }

  fetchRelatedPosts() {
    const currentPost = this.blogPosts.find(post => post.id === this.currentPostId);
    if (currentPost) {
      this.relatedPosts = this.blogPosts
        .filter(post => post.category === currentPost.category && post.id !== this.currentPostId)
        .slice(0, 3); // Limit to 3 related posts
    }
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;

      this.http.post(`${this.apiUrl}/blogs/${this.currentPostId}/comments`, formData)
        .subscribe(
          (response: any) => {
            console.log('Success:', response.message);
            this.comments.push({
              author: formData.author,
              email: formData.email,
              comment: formData.comment,
              date: new Date().toLocaleString()
            });
            this.commentForm.reset();
          },
          (error) => {
            console.error('Error:', error);
            alert('Failed to post comment.');
          }
        );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
