import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptarPageRoutingModule } from './adoptar-routing.module';

import { AdoptarPage } from './adoptar.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptarPageRoutingModule,
    SharedModule
  ],
  declarations: [AdoptarPage]
})
export class AdoptarPageModule {}
