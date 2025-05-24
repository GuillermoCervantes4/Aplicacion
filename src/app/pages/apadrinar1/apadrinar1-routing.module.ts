import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Apadrinar1Page } from './apadrinar1.page';

const routes: Routes = [
  {
    path: '',
    component: Apadrinar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Apadrinar1PageRoutingModule {}
