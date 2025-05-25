import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Donacion6PageRoutingModule } from './donacion6-routing.module';

import { Donacion6Page } from './donacion6.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Donacion6PageRoutingModule, SharedModule
  ],
  declarations: [Donacion6Page]
})
export class Donacion6PageModule {}