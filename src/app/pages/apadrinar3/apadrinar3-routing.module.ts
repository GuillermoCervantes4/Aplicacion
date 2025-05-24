import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Apadrinar3Page } from './apadrinar3.page';

const routes: Routes = [
  {
    path: '',
    component: Apadrinar3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Apadrinar3PageRoutingModule {}
