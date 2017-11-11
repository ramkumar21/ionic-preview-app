import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'template.html'
})
export class BasicPage {

  constructor(public alertCtrl: AlertController) { }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
