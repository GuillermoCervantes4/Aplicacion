import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerritoPageRoutingModule } from './perrito-routing.module';

import { PerritoPage } from './perrito.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerritoPageRoutingModule,
    SharedModule
  ],
  declarations: [PerritoPage]
})
export class PerritoPageModule {}
