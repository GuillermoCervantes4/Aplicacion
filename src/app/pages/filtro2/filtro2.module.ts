import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filtro2PageRoutingModule } from './filtro2-routing.module';

import { Filtro2Page } from './filtro2.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filtro2PageRoutingModule,
    SharedModule
  ],
  declarations: [Filtro2Page]
})
export class Filtro2PageModule {}
