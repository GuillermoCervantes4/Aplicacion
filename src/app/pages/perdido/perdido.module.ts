import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerdidoPageRoutingModule } from './perdido-routing.module';

import { PerdidoPage } from './perdido.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerdidoPageRoutingModule,
    SharedModule
  ],
  declarations: [PerdidoPage]
})
export class PerdidoPageModule {}
