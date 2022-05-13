import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';
import { TitoloDevskillComponent } from 'src/app/components/titolo-devskill/titolo-devskill.component';
import { BottonePersonalizzatoComponent } from 'src/app/components/bottone-personalizzato/bottone-personalizzato.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistrazionePage,TitoloDevskillComponent,BottonePersonalizzatoComponent]
})
export class RegistrazionePageModule {}
