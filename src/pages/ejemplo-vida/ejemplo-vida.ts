import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EjemploVidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejemplo-vida',
  templateUrl: 'ejemplo-vida.html',
})
export class EjemploVidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjemploVidaPage');
  }
  TeoremaReciproco(){
    this.navCtrl.push("TeoremaReciprocoPage");
  }

}
