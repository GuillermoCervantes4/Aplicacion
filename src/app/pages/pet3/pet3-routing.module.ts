import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pet3Page } from './pet3.page';

const routes: Routes = [
  {
    path: '',
    component: Pet3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pet3PageRoutingModule {}
