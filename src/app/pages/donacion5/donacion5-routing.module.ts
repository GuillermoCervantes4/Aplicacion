import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Donacion5Page } from './donacion5.page';

const routes: Routes = [
  {
    path: '',
    component: Donacion5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Donacion5PageRoutingModule {}
