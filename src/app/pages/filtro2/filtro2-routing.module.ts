import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filtro2Page } from './filtro2.page';

const routes: Routes = [
  {
    path: '',
    component: Filtro2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filtro2PageRoutingModule {}
