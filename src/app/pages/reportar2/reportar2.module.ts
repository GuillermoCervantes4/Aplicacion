import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reportar2PageRoutingModule } from './reportar2-routing.module';

import { Reportar2Page } from './reportar2.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reportar2PageRoutingModule,
    SharedModule
  ],
  declarations: [Reportar2Page]
})
export class Reportar2PageModule {}
