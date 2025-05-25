import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reportar2Page } from './reportar2.page';

const routes: Routes = [
  {
    path: '',
    component: Reportar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reportar2PageRoutingModule {}
