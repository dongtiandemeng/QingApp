import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {Login} from '../login/login';


@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  constructor(public modalCtrl: ModalController,public nav:NavController) {    
  }

 presentModal() {
    // let modal = this.modalCtrl.create(Login);
    // modal.present();
    this.nav.push(Login);
  }
}

// @Component({
//   templateUrl: 'modal-content.html'
// })
// export class ModalsContentPage {
//   character;

//   constructor(
//       public viewCtrl: ViewController
//   ) {

//   }

//   dismiss() {
//     this.viewCtrl.dismiss();
//   }
// }
