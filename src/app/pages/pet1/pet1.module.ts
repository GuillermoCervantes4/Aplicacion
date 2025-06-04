import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pet1PageRoutingModule } from './pet1-routing.module';

import { Pet1Page } from './pet1.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pet1PageRoutingModule,
    SharedModule
  ],
  declarations: [Pet1Page]
})
export class Pet1PageModule {}
