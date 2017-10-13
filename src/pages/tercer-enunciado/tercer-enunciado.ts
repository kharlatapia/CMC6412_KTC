import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TercerEnunciadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tercer-enunciado',
  templateUrl: 'tercer-enunciado.html',
})
export class TercerEnunciadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TercerEnunciadoPage');
  }

  EjemploTercer(){
    this.navCtrl.push("EjemploTercerPage");
  }
}
