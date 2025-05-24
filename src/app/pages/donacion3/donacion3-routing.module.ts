import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Donacion3Page } from './donacion3.page';

const routes: Routes = [
  {
    path: '',
    component: Donacion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Donacion3PageRoutingModule {}
