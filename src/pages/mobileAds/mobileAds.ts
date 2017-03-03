import { Component } from '@angular/core';
import { AllAds } from '../../app/ads.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'page-mobileAds',
    templateUrl: 'mobileAds.html'
})

export class MobileAdsPage {
    mobileAds;
    images = [];
    constructor(private mobileads: AllAds, private af: AngularFire) {
        this.mobileAds = [];
        this.mobileAds = this.mobileads.mobileAds;
        // this.af.database.list('images/')
        //     .subscribe((x) => {
        //         // this.images.push(x);
        //         x.map((y) => { this.images.push(y.image) });
        //     })
    }
}