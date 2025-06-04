import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Pet5PageRoutingModule } from './pet5-routing.module';

import { Pet5Page } from './pet5.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pet5PageRoutingModule, 
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [Pet5Page]
})
export class Pet5PageModule {}
