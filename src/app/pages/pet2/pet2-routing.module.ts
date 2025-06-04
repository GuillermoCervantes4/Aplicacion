import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pet2Page } from './pet2.page';

const routes: Routes = [
  {
    path: '',
    component: Pet2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pet2PageRoutingModule {}
