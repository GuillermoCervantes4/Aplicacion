import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Apadrinar1PageRoutingModule } from './apadrinar1-routing.module';

import { Apadrinar1Page } from './apadrinar1.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Apadrinar1PageRoutingModule, SharedModule
  ],
  declarations: [Apadrinar1Page]
})
export class Apadrinar1PageModule {}
