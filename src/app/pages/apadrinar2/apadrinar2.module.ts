import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Apadrinar2PageRoutingModule } from './apadrinar2-routing.module';

import { Apadrinar2Page } from './apadrinar2.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Apadrinar2PageRoutingModule, SharedModule
  ],
  declarations: [Apadrinar2Page]
})
export class Apadrinar2PageModule {}
