import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pet4Page } from './pet4.page';

const routes: Routes = [
  {
    path: '',
    component: Pet4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pet4PageRoutingModule {}
