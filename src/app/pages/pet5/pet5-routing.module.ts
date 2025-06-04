import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pet5Page } from './pet5.page';

const routes: Routes = [
  {
    path: '',
    component: Pet5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pet5PageRoutingModule {}
