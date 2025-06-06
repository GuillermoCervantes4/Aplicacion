import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetShopPageRoutingModule } from './pet-shop-routing.module';

import { PetShopPage } from './pet-shop.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetShopPageRoutingModule,
    SharedModule
  ],
  declarations: [PetShopPage]
})
export class PetShopPageModule {}
