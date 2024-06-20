import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesforceWebinarComponent } from './salesforce-webinar.component';

const routes: Routes = [
  {
    path: '',
    component: SalesforceWebinarComponent
  } 
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SalesforceWebinarModule { }
