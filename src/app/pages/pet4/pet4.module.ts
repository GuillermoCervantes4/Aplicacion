import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pet4PageRoutingModule } from './pet4-routing.module';

import { Pet4Page } from './pet4.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pet4PageRoutingModule,
    SharedModule
  ],
  declarations: [Pet4Page]
})
export class Pet4PageModule {}
