import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlberguePage } from './albergue.page';

const routes: Routes = [
  {
    path: '',
    component: AlberguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlberguePageRoutingModule {}
