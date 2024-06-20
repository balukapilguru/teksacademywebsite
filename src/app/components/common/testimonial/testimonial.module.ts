import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialComponent } from './testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TestimonialModule { }
