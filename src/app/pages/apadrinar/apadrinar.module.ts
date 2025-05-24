import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApadrinarPageRoutingModule } from './apadrinar-routing.module';

import { ApadrinarPage } from './apadrinar.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApadrinarPageRoutingModule, SharedModule
  ],
  declarations: [ApadrinarPage]
})
export class ApadrinarPageModule {}
