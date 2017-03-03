import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AllAdsPage } from '../pages/allAds/allAds';
import { AddPostPage } from '../pages/addPosts/addPost';
import { CarAdsPage } from '../pages/carAds/carAds';
import { MobileAdsPage } from '../pages/mobileAds/mobileAds';
import { AppService } from './app.service';
import { AllAds } from './ads.service'
import { AngularFire, AngularFireModule } from 'angularfire2';
const firebaseConfig = {
  apiKey: "AIzaSyCoMEaWGfengBSsPLfNf28e5ns_2ZJFqx4",
  authDomain: "ionicapp-5d19d.firebaseapp.com",
  databaseURL: "https://ionicapp-5d19d.firebaseio.com",
  storageBucket: "ionicapp-5d19d.appspot.com",
  messagingSenderId: "744032286061"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AllAdsPage,
    AddPostPage,
    CarAdsPage,
    MobileAdsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AllAdsPage,
    AddPostPage,
    CarAdsPage,
    MobileAdsPage,
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, AppService, AllAds]
})
export class AppModule { }
