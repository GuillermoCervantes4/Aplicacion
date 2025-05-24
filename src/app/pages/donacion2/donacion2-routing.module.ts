import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Donacion2Page } from './donacion2.page';

const routes: Routes = [
  {
    path: '',
    component: Donacion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Donacion2PageRoutingModule {}
