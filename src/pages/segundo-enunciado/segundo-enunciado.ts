import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegundoEnunciadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segundo-enunciado',
  templateUrl: 'segundo-enunciado.html',
})
export class SegundoEnunciadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundoEnunciadoPage');
  }
  EjemploSegundo(){
    this.navCtrl.push("EjemploSegundoPage");
  }
}
