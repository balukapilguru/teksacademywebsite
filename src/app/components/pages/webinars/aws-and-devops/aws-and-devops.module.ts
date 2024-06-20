import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AwsAndDevopsComponent } from './aws-and-devops.component';
const routes: Routes = [
  {
    path: '',
    component: AwsAndDevopsComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AwsAndDevopsModule { }
