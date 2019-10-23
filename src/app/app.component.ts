import { Component } from '@angular/core';
import { Platform, Keyboard } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    console.log("before ready");
    console.log(new Date().getTime(), "before ready");
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.registerBackButtonAction();
      console.log(new Date().getTime(), "ready");
      // 应用程序最小化和重新唤起事件
      /* platform.pause.subscribe(() => {
        console.log("app pause");
      });
      platform.resume.subscribe(() => {
        console.log("app resume");
      }); */
    });
  }

  registerBackButtonAction() {
    let counts = 0;
    this.platform.registerBackButtonAction(() => {
      console.log(counts);
      counts++;
    })
  }
}
