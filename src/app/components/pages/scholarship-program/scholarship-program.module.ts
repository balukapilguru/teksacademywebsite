import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScholarshipProgramComponent } from './scholarship-program.component';


const routes: Routes = [
  {
    path: '',
    component: ScholarshipProgramComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ScholarshipProgramModule { 

}
