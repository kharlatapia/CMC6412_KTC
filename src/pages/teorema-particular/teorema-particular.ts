import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeoremaParticularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teorema-particular',
  templateUrl: 'teorema-particular.html',
})
export class TeoremaParticularPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeoremaParticularPage');
  }
  
  PrimerEnunciado(){
    this.navCtrl.push("PrimerEnunciadoPage");
  }

  SegundoEnunciado(){
    this.navCtrl.push("SegundoEnunciadoPage");
  }

  TercerEnunciado(){
    this.navCtrl.push("TercerEnunciadoPage");
  }
}
