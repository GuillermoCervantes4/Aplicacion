import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Apadrinar3PageRoutingModule } from './apadrinar3-routing.module';

import { Apadrinar3Page } from './apadrinar3.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Apadrinar3PageRoutingModule, SharedModule
  ],
  declarations: [Apadrinar3Page]
})
export class Apadrinar3PageModule {}
