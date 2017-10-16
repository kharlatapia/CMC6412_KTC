import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeoremaGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teorema-general',
  templateUrl: 'teorema-general.html',
})
export class TeoremaGeneralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeoremaGeneralPage');
  }
  EjemploGeneral(){
    this.navCtrl.push("EjemploGeneralPage");
  }

}
