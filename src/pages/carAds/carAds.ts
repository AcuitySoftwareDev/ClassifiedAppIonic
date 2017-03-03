import { Component } from '@angular/core';
import { AllAds } from '../../app/ads.service';
import { AngularFire } from 'angularfire2';
@Component({
    selector: 'page-carAds',
    templateUrl: 'carAds.html',
})

export class CarAdsPage {
    carAds;
    images = [];
    constructor(private carads: AllAds, private af: AngularFire) {
        this.carAds = [];
        this.carAds = this.carads.carAds;
        // Points to the root reference
        // this.af.database.list('images/')
        //     .subscribe((x) => {
        //         // this.images.push(x);
        //         x.map((y) => { this.images.push(y.image) });
        //     })
        var storageRef = firebase.storage().ref();

        // Points to 'images'
        var imagesRef = storageRef.child('images');

        // Points to 'images/space.jpg'
        // Note that you can use variables to create child values
        var fileName = '../../assets/icon/down.jpg';
        var spaceRef = imagesRef.child(fileName);

        // File path is 'images/space.jpg'
        var path = spaceRef.fullPath

        // File name is 'space.jpg'
        var name = spaceRef.name

        // Points to 'images'
        var imagesRef = spaceRef.parent;
    }
}