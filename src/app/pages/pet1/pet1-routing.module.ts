import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pet1Page } from './pet1.page';

const routes: Routes = [
  {
    path: '',
    component: Pet1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pet1PageRoutingModule {}
