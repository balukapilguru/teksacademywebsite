import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form.component';

const routes: Routes = [
  {
    path: '',
    component: EnquiryFormComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule]
})
export class EnquiryFormModule { }
