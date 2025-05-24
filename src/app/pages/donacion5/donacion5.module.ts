import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Donacion5PageRoutingModule } from './donacion5-routing.module';

import { Donacion5Page } from './donacion5.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Donacion5PageRoutingModule, SharedModule
  ],
  declarations: [Donacion5Page]
})
export class Donacion5PageModule {}
