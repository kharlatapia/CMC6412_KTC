import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController) {

  }
ThalesDeMileto(){
  this.navCtrl.push("ThalesDeMiletoPage");
}

OrigenTeorema(){
  this.navCtrl.push("OrigenTeoremaPage");
}

TeoremaParticular(){
  this.navCtrl.push("TeoremaParticularPage");
}

TeoremaGeneral(){
  this.navCtrl.push("TeoremaGeneralPage");
}

TeoremaReciproco(){
  this.navCtrl.push("TeoremaReciprocoPage");
}
}
