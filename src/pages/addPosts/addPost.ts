import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllAds } from '../../app/ads.service';
import { AngularFire } from 'angularfire2';
@Component({
    selector: 'page-addPost',
    templateUrl: 'addPost.html'
})

export class AddPostPage {
    imgRefs = '';
    imgRefsCar = '';
    // storageFile;
    constructor(public navCtrl: NavController, private allads: AllAds, private af: AngularFire) {
        // let storageRf = firebase.storage();
        // storageRf.ref().child('images/1.jpg').getDownloadURL().then(x => console.log(x))
    }
    getImgUrl() {
        const storageRef = firebase.storage().ref().child('images/');
        storageRef.getDownloadURL().then((url) => {
            console.log("aaaaaaaa", url);
        }
            // this.img_ref.push(url)
        );
    }
    abc(e) {
        let file = e.target.files[0];
        let storageFile = firebase.storage().ref().child('images/' + file.name);
        console.log('aaaaa', file.name)
        storageFile.put(file).then((url) => {
            this.imgRefs = url.downloadURL;
        });
        console.log(this.imgRefs);
        // task.on('state_changed', function progress(snapshot) {
        //     let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // }, function error() {

        // }, function completed() {
        // })
        // let storageRef = firebase.storage();
        // storageRef.ref('images/' + file.name).getDownloadURL().then(function (url) {
        //     console.log(url);
        //     // `url` is the download URL for 'images/stars.jpg'

        //     // Or inserted into an <img> element:
        // }).catch(function (error) {
        //     // Handle any errors
        //     console.log('Erorrrrrrrrrrr ', error);
        // });
    }


    mobilesSubmit(name, rs, model, address) {
        this.allads.insertMobilesData(name, rs, model, address, this.imgRefs);
        this.af.database.list('images/').push({ image: this.imgRefs })
        console.log(this.imgRefs)
        alert('Your Ad submitted');
    }
    carsSubmit(name, rs, model, address) {
        this.allads.insertCarsData(name, rs, model, address, this.imgRefs);
        this.af.database.list('images/').push({ image: this.imgRefs });
        console.log(this.imgRefs)
        alert('Your Ad submitted');
    }
    detail = false;
    carDetails = false;
    mobileDetails = false;
    showPost() {
        this.detail = true;
    }
    showCarFields() {
        this.mobileDetails = false;
        this.carDetails = true;
    }
    showMobileFields() {
        this.carDetails = false;
        this.mobileDetails = true;

    }
}