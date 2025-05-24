import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Donacion1Page } from './donacion1.page';

const routes: Routes = [
  {
    path: '',
    component: Donacion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Donacion1PageRoutingModule {}
