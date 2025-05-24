import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Donacion4Page } from './donacion4.page';

const routes: Routes = [
  {
    path: '',
    component: Donacion4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Donacion4PageRoutingModule {}
