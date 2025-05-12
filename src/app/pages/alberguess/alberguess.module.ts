import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlberguessPageRoutingModule } from './alberguess-routing.module';

import { AlberguessPage } from './alberguess.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlberguessPageRoutingModule,
    SharedModule
  ],
  declarations: [AlberguessPage]
})
export class AlberguessPageModule {}
