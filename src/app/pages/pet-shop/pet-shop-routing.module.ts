import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetShopPage } from './pet-shop.page';

const routes: Routes = [
  {
    path: '',
    component: PetShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetShopPageRoutingModule {}
