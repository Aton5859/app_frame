import { LoadingServices } from './../services/loadingservices';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Zip } from '@ionic-native/zip';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

// 圆形进度条
import { RoundProgressModule } from 'angular-svg-round-progressbar';
// Iframe modal
import { ModalIframeSmComponent } from '../components/modal-iframe-sm/modal-iframe-sm';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalIframeSmComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalIframeSmComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    FileTransfer,
    FileTransferObject,
    Zip,
    BarcodeScanner,
    InAppBrowser,
    LoadingServices
  ]
})
export class AppModule { }
