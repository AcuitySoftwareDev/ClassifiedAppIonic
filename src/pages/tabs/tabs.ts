import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AllAdsPage } from '../allAds/allAds';
import { CarAdsPage } from '../carAds/carAds';
import { MobileAdsPage } from '../mobileAds/mobileAds';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = AllAdsPage;
  tab5Root: any = CarAdsPage;
  tab6Root: any = MobileAdsPage;
  constructor() {

  }
}
