import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesStyleOneComponent } from './courses-style-one.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesStyleOneComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class CoursesStyleOneModule { }
