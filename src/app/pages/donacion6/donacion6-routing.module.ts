import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Donacion6Page } from './donacion6.page';

const routes: Routes = [
  {
    path: '',
    component: Donacion6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Donacion6PageRoutingModule {}
