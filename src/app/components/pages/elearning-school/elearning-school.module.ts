import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ElearningSchoolComponent } from './elearning-school.component';


const routes: Routes = [
  {
    path: '',
    component: ElearningSchoolComponent
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class ElearningSchoolModule { }
