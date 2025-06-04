import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pet6Page } from './pet6.page';

const routes: Routes = [
  {
    path: '',
    component: Pet6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pet6PageRoutingModule {}
