import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Donacion2PageRoutingModule } from './donacion2-routing.module';

import { Donacion2Page } from './donacion2.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Donacion2PageRoutingModule, SharedModule
  ],
  declarations: [Donacion2Page]
})
export class Donacion2PageModule {}
