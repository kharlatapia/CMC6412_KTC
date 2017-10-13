import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjemploPrimerPage } from './ejemplo-primer';

@NgModule({
  declarations: [
    EjemploPrimerPage,
  ],
  imports: [
    IonicPageModule.forChild(EjemploPrimerPage),
  ],
})
export class EjemploPrimerPageModule {}
