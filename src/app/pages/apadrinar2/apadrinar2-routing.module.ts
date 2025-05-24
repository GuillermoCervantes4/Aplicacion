import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Apadrinar2Page } from './apadrinar2.page';

const routes: Routes = [
  {
    path: '',
    component: Apadrinar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Apadrinar2PageRoutingModule {}
