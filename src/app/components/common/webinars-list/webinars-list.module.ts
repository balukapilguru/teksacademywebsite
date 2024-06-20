import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebinarsListComponent } from './webinars-list.component';


const routes: Routes = [
  {
    path: '',
    component: WebinarsListComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class WebinarsListModule { }
