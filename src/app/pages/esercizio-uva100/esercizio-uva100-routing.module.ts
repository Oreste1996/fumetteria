import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsercizioUva100Page } from './esercizio-uva100.page';

const routes: Routes = [
  {
    path: '',
    component: EsercizioUva100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsercizioUva100PageRoutingModule {}
