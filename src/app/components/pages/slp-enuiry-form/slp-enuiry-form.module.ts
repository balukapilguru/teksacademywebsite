import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SlpEnuiryFormComponent } from './slp-enuiry-form.component';

const routes: Routes = [
  {
    path: '',
    component: SlpEnuiryFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SlpEnuiryFormModule { }
