import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardPerrosComponent } from 'src/app/components/card-perros/card-perros.component';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  exports: [ToolbarComponent, CardPerrosComponent, CardComponent],
  declarations: [ToolbarComponent, CardPerrosComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot()
  ]
})
export class SharedModule { }
