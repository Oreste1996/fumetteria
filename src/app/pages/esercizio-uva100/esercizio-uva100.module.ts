import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsercizioUva100PageRoutingModule } from './esercizio-uva100-routing.module';

import { EsercizioUva100Page } from './esercizio-uva100.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsercizioUva100PageRoutingModule
  ],
  declarations: [EsercizioUva100Page]
})
export class EsercizioUva100PageModule {}
