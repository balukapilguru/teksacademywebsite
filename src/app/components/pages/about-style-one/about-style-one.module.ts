import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutStyleOneComponent } from './about-style-one.component';


const routes: Routes = [
  {
    path: '',
    component: AboutStyleOneComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AboutStyleOneModule { }
