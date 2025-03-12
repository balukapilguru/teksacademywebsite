import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  // Save data to session storage
  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve data from session storage
  getItem<T>(key: string): T | null {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Remove specific item
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Clear all session data
  clear(): void {
    sessionStorage.clear();
  }
}
