import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EjemploPrimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejemplo-primer',
  templateUrl: 'ejemplo-primer.html',
})
export class EjemploPrimerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjemploPrimerPage');
  }
  TeoremaParticular(){
    this.navCtrl.push("TeoremaParticularPage");
  }
}
