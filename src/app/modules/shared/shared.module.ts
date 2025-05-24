import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardPerrosComponent } from 'src/app/components/card-perros/card-perros.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { HeaderComponent } from 'src/app/components/header/header.component';



@NgModule({
  exports: [ToolbarComponent, CardPerrosComponent, CardComponent, HeaderComponent],
  declarations: [ToolbarComponent, CardPerrosComponent, CardComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot()
  ]
})
export class SharedModule { }
