import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pet6PageRoutingModule } from './pet6-routing.module';

import { Pet6Page } from './pet6.page';
import { share } from 'rxjs';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pet6PageRoutingModule,
    SharedModule
  ],
  declarations: [Pet6Page]
})
export class Pet6PageModule {}
