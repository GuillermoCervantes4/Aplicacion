import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pet2PageRoutingModule } from './pet2-routing.module';

import { Pet2Page } from './pet2.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pet2PageRoutingModule,
    SharedModule
  ],
  declarations: [Pet2Page]
})
export class Pet2PageModule {}
