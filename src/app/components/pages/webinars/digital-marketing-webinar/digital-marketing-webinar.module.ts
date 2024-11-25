import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DigitalMarketingWebinarComponent } from './digital-marketing-webinar.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalMarketingWebinarComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DigitalMarketingWebinarModule { }
