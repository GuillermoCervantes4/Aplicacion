import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlberguePageRoutingModule } from './albergue-routing.module';

import { AlberguePage } from './albergue.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlberguePageRoutingModule,
    SharedModule, 
  ],
  declarations: [AlberguePage]
})
export class AlberguePageModule {}
