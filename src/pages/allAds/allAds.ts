import { Component } from "@angular/core";
import { NavController } from 'ionic-angular'
import { AllAds } from '../../app/ads.service';
import { AngularFire } from 'angularfire2';
@Component({
    selector: 'page-allAds',
    templateUrl: 'allAds.html',
})

export class AllAdsPage {
    ads = [];
    constructor(public navCtrl: NavController, private allads: AllAds, private af: AngularFire) {
        this.ads = []
        this.ads = this.allads.allAds;
    }
}