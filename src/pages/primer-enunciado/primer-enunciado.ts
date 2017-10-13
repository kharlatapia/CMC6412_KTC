import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrimerEnunciadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primer-enunciado',
  templateUrl: 'primer-enunciado.html',
})
export class PrimerEnunciadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimerEnunciadoPage');
  }

  EjemploPrimer(){
    this.navCtrl.push("EjemploPrimerPage");
  }
}
