import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController } from 'ionic-angular';
import { AppService } from '../../app/app.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lists: FirebaseListObservable<any>;
  removeItem;
  constructor(public navCtrl: NavController, private appService: AppService, private af: AngularFire) {
    this.lists = this.af.database.list('user');
  }
  onSubmit(name) {
    this.appService.onSubmit(name);
  }
  delete(key) {
    this.af.database.list('/user').remove(key);
  }
}
