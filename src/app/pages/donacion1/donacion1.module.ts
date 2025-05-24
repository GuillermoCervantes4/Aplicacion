import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Donacion1PageRoutingModule } from './donacion1-routing.module';

import { Donacion1Page } from './donacion1.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Donacion1PageRoutingModule, SharedModule
  ],
  declarations: [Donacion1Page]
})
export class Donacion1PageModule {}
