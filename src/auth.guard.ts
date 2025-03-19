import { SessionStorageService } from '../src/app/session-storage.service'; // Assuming session service is implemented

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {environment} from "../src/environments/environment"



export const AuthGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const sessionStorageService = inject(SessionStorageService);
  const http = inject(HttpClient);

  const apiUrl = environment.apiUrl; // Replace with your actual API
  const storedUser = sessionStorageService.getItem<string>('username');

  // ✅ If user is already logged in, redirect to the shared job without asking for email
  if (storedUser) {
    return true;
  }

  // 🔹 If no user session, ask for email
  const { value: email } = await Swal.fire({
    title: 'Please enter your registered Mail ID to access the job portal',
    input: 'text',
    inputAttributes: { autocapitalize: 'off' },
    showCancelButton: true,
    confirmButtonText: 'Open',
    showLoaderOnConfirm: true,
    confirmButtonColor: '#405189',
    preConfirm: async (email) => {
      try {
        const response$ = http.post(`${apiUrl}/jobs/chech_jobapply`, { email });

        const response: any = await firstValueFrom(response$).catch(() => null);

        if (response) {
          sessionStorageService.setItem('username', response);
          
          return `Hi ${response?.name}, Welcome Back to the Job Portal`;
        } else {
          Swal.showValidationMessage('Invalid Email');
          return null;
        }
      } catch (error) {
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        Swal.showValidationMessage(`Request failed: ${errorMessage}`);
        return null;
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });

  if (email) {
    Swal.fire({
      title: email,
     
      confirmButtonColor: '#405189'
    });

    router.navigateByUrl(state.url);
    return true;
  }

  router.navigate(['/login']);
  return false;
};

