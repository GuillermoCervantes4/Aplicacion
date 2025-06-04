import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pet3PageRoutingModule } from './pet3-routing.module';

import { Pet3Page } from './pet3.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pet3PageRoutingModule,
    SharedModule
  ],
  declarations: [Pet3Page]
})
export class Pet3PageModule {}
