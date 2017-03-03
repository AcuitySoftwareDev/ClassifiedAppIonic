import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
@Injectable()

export class AllAds {
    constructor(private af: AngularFire) {
        this.af.database.list('CarAds').subscribe((val) => {
            for (let i = 0; i < val.length; i++) {
                // this.allAds.push({ name: name, rs: rs, model: model, address: address, image });
                console.log(val[i].name);
                this.allAds.push({ name: val[i].name, rs: val[i].rs, model: val[i].model, address: val[i].address, image: val[i].image })
                this.carAds.push({ name: val[i].name, rs: val[i].rs, model: val[i].model, address: val[i].address, image: val[i].image })
            }
        })
        this.af.database.list('MobileAds').subscribe((val) => {
            for (let i = 0; i < val.length; i++) {
                // this.allAds.push({ name: name, rs: rs, model: model, address: address, image });
                console.log(val[i].name);
                this.allAds.push({ name: val[i].name, rs: val[i].rs, model: val[i].model, address: val[i].address, image: val[i].image })
                this.mobileAds.push({ name: val[i].name, rs: val[i].rs, model: val[i].model, address: val[i].address, image: val[i].image })
            }
        })
    }
    allAds =
    [
        // { name: "Nokia", rs: '6500', model: '5402', address: 'Karachi', image: '../assets/icon/down.jpg' },
        // { name: "Corolla", rs: '6600', model: '5402', address: 'Karachi', image: '../assets/icon/download1.jpg' },
        // { name: "HTC", rs: '6500', model: '5402', address: 'Karachi', image: '../assets/icon/download11.jpg' },
    ]

    carAds = [
        // { name: "Corolla", rs: '6600', model: '5402', address: 'Karachi', image: '../assets/icon/download1.jpg' },
    ]

    mobileAds = [

        // { name: "Nokia", rs: '6500', model: '5402', address: 'Karachi', image: '../assets/icon/down.jpg' },
        // { name: "HTC", rs: '6500', model: '5402', address: 'Karachi', image: '../assets/icon/download11.jpg' },
    ]


    insertCarsData(name, rs, model, address, image) {
        // image = image.replace(/^.*[\\\/]/, '');
        // firebase.database().ref('CarAds').push({
        //     name: name,
        //     rs: rs,
        //     model: model,
        //     address: address,
        //     image: image
        // })
        this.af.database.list('CarAds').push({
            name: name,
            rs: rs,
            model: model,
            address: address,
            image: image
        })
        // this.af.database.list('CarAds').subscribe((val) => {
        //     for (let i = 0; i < val.length; i++) {
        //         // this.allAds.push({ name: name, rs: rs, model: model, address: address, image });
        //         console.log(val[i].name);
        //         this.allAds.push({ name: val[i].name, rs: val[i].rs, model: val[i].model, address: val[i].address, image })
        //         this.carAds.push({ name: val[i].name, rs: val[i].rs, model: val[i].model, address: val[i].address, image })
        //     }
        // })
        // this.carAds.push({ name: name, rs: rs, model: model, address: address, image })
    }


    insertMobilesData(name, rs, model, address, image) {
        // console.log("image", image)
        // image = image.replace(/^.*[\\\/]/, '');
        this.af.database.list('MobileAds').push({
            name: name,
            rs: rs,
            model: model,
            address: address,
            image: image
        })
        // firebase.database().ref('MobileAds').push({
        //     name: name,
        //     rs: rs,
        //     model: model,
        //     address: address,
        //     image: image
        // })

        // this.allAds.push({ name: name, rs: rs, model: model, address: address, image })
        // this.mobileAds.push({ name: name, rs: rs, model: model, address: address, image })
    }

}