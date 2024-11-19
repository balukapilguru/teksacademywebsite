import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Renamed interface to follow TypeScript conventions
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
}

@Injectable({
  providedIn: 'root'
})
export class BlogsDataService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Method to fetch a specific blog by ID
  getBlogById(id: number): Observable<BlogData> {
    return this.http.get<BlogData>(`${this.apiUrl}/blogs/getblogbyid/${id}`);
  }

  // Existing method to get all blog listings
  getBlogs(): Observable<{ blogs: BlogData[] }> {
    return this.http.get<{ blogs: BlogData[] }>(`${this.apiUrl}/blogs/getblogs`);
  }

  // New method to search blogs by query
  searchBlogs(searchQuery: string): Observable<{ blogs: BlogData[] }> {
    const params = { searchQuery: searchQuery };  // Creating the search parameter
    return this.http.get<{ blogs: BlogData[] }>(`${this.apiUrl}/blogs/getblogs`, { params });
  }
}
