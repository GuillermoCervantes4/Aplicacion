import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerritoPage } from './perrito.page';

const routes: Routes = [
  {
    path: '',
    component: PerritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerritoPageRoutingModule {}
