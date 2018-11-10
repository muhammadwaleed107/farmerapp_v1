
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FileServiceProvider } from '../providers/file-service/file-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Broadcaster } from '../shared/broadcaster';

import { ApiModule } from './api.module';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { makeToast } from '../shared/makeToast';
import { StorageService } from '../shared/storage.service';
import { ReactiveFormsModule } from '@angular/forms';

import { MakeLoader } from '../shared/makeLoader';

import { LocalStorageProvider } from '../providers/local-storage/local-storage';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FormerDetailsPage } from '../pages/former-details/former-details';
import { DeliveryRequestPage } from '../pages/delivery-request/delivery-request';
import { TrucksPage } from '../pages/trucks/trucks';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormerDetailsPage,
    DeliveryRequestPage,
    TrucksPage
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
   

    ApiModule.forRoot('/'),
    // ApiModule.forRoot('http://52.28.232.38:92/'), //live IP no build
    // ApiModule.forRoot('https://10.3.12.117:8092/'), // DEV
    //  ApiModule.forRoot('https://nms.bolnetwork.com/'),// mobile build
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormerDetailsPage,
    DeliveryRequestPage,
    TrucksPage
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    StatusBar,
    SplashScreen,
  
    FileServiceProvider,
  
    Broadcaster,
    MakeLoader,
    HttpServiceProvider,
    makeToast,
   
    StorageService,
   
    LocalStorageProvider,
   

  ]
})
export class AppModule { }
