import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    
    constructor(private router: Router) { }
    shouldDisplayOptionItem(): boolean {
        // Get the current URL
        const currentUrl = this.router.url;
    
        // Check if the current URL matches the specified pattern
        // return currentUrl !== '/webinar/salesforce'; 
        const hidePatterns = ['/webinar/salesforce', '/webinar/bim', '/webinar/full-stack', 'webinar/digital-marketing',
    'webinar/data-science', 'webinar/aws-plus-devops'];
    return !hidePatterns.some(pattern => currentUrl.includes(pattern));
        
      }

   
      
    ngOnInit(): void {
    //     var currentUrl = window.location.href;

    // // Check if the current URL matches the specified pattern
    // if (currentUrl === 'https://www.teksacademy.com/fullstack') {
    //     // If the condition is true, hide the option-item section
    //     document.querySelector('.option-item').style.display = 'none';
    // }
    }
    reloadPage() {
      if (this.router.url === '/') {
        // Force a reload when already on the home page
        window.location.reload();
      } else {
        // Navigate to the home page and reload after navigation completes
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }
    }
    
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}