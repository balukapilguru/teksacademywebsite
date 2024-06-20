import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BimWebinarComponent } from './bim-webinar.component';

const routes: Routes = [
  {
    path: '',
    component: BimWebinarComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BimWebinarModule { }
