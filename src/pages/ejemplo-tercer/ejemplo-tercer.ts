import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EjemploTercerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejemplo-tercer',
  templateUrl: 'ejemplo-tercer.html',
})
export class EjemploTercerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjemploTercerPage');
  }
  TeoremaParticular(){
    this.navCtrl.push("TeoremaParticularPage");
  }
}
