import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FullStackWebinarComponent } from './full-stack-webinar.component';


const routes: Routes = [
  {
    path: '',
    component: FullStackWebinarComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FullStackWebinarModule { }
