import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlberguessPage } from './alberguess.page';

const routes: Routes = [
  {
    path: '',
    component: AlberguessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlberguessPageRoutingModule {}
