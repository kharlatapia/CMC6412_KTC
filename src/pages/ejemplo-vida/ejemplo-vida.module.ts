import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjemploVidaPage } from './ejemplo-vida';

@NgModule({
  declarations: [
    EjemploVidaPage,
  ],
  imports: [
    IonicPageModule.forChild(EjemploVidaPage),
  ],
})
export class EjemploVidaPageModule {}
