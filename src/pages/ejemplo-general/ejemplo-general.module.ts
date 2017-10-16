import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjemploGeneralPage } from './ejemplo-general';

@NgModule({
  declarations: [
    EjemploGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(EjemploGeneralPage),
  ],
})
export class EjemploGeneralPageModule {}
