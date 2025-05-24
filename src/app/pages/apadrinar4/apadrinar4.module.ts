import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Apadrinar4PageRoutingModule } from './apadrinar4-routing.module';

import { Apadrinar4Page } from './apadrinar4.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Apadrinar4PageRoutingModule, SharedModule
  ],
  declarations: [Apadrinar4Page]
})
export class Apadrinar4PageModule {}
