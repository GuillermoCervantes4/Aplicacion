import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroPageRoutingModule } from './filtro-routing.module';

import { FiltroPage } from './filtro.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroPageRoutingModule,
    SharedModule
  ],
  declarations: [FiltroPage]
})
export class FiltroPageModule {}
