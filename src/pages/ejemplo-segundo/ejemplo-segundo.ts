import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EjemploSegundoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejemplo-segundo',
  templateUrl: 'ejemplo-segundo.html',
})
export class EjemploSegundoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjemploSegundoPage');
  }
  TeoremaParticular(){
    this.navCtrl.push("TeoremaParticularPage");
  }

}
