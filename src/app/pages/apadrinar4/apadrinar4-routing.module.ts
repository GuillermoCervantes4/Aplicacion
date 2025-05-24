import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Apadrinar4Page } from './apadrinar4.page';

const routes: Routes = [
  {
    path: '',
    component: Apadrinar4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Apadrinar4PageRoutingModule {}
