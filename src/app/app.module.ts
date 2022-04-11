import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

//allegedly, this is okay to expose due to FireBase apps being secured by writing [rules](/snippets/firestore-rules-recipes)
//I'm storing this elsewhere though
//not because I'm paranoid but because it's a good habit to keep up.
const config = require('./config.json');
const firebaseConfig = {

  apiKey: config.firebaseConfigDev.apiKey,
  authDomain: config.firebaseConfigDev.authDomain,
  projectId: config.firebaseConfigDev.projectId,
  storageBucket: config.firebaseConfigDev.storageBucket,
  messagingSenderId: config.firebaseConfigDev.messagingSenderId,
  appId: config.firebaseConfigDev.appId,
  measurementId: config.firebaseConfigDev.measurementId
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
