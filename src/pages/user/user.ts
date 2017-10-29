import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController } from 'ionic-angular';
import { UserData } from '../../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
import { NewUserPage } from "../new-user/new-user";
import { DetailUserPage } from '../detail-user/detail-user';
import { VerificationRostroPage } from '../verification/verification';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  users: FirebaseListObservable<UserData[]>;
  loadding: boolean = true;
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    this.users = this.userProvider.getUsers()
    this.users.subscribe(() => this.loadding = false);
  }

  NewUser() {
    this.navCtrl.push(NewUserPage);
  }

  deleteConfirm(user: UserData) {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar User?',
      message: 'Esta seguro de eliminar a:  <b>'+user.name+'</b>?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteUser(user);
          }
        }
      ]
    });
    confirm.present();
  }

  deleteUser(user: UserData) {
    this.showToast('User Eliminado', 'top');
    this.userProvider.deleteUser(user.$key);
  }

  showToast(message: string, position: string){
    let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: position
      });
    toast.present();
  }

  detailUser(keyUser) {
    this.navCtrl.push(DetailUserPage, { keyUser: keyUser });
  }

}
