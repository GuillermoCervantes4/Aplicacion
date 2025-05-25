import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetShopPageRoutingModule } from './pet-shop-routing.module';

import { PetShopPage } from './pet-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetShopPageRoutingModule
  ],
  declarations: [PetShopPage]
})
export class PetShopPageModule {}
