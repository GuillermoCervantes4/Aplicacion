import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Donacion4PageRoutingModule } from './donacion4-routing.module';

import { Donacion4Page } from './donacion4.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Donacion4PageRoutingModule, SharedModule
  ],
  declarations: [Donacion4Page]
})
export class Donacion4PageModule {}
