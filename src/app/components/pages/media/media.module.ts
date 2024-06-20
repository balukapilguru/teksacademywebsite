import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './media.component';


const routes: Routes = [
  {
    path: '',
    component: MediaComponent
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MediaModule { }
