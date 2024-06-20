import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataScienceWebinarComponent } from './data-science-webinar.component';

const routes: Routes = [
  {
    path: '',
    component: DataScienceWebinarComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DataScienceWebinarModule { }
