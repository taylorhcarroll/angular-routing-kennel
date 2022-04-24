import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import firebaseConfig from './config.json'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

//allegedly, this is okay to expose due to FireBase apps being secured by writing [rules](/snippets/firestore-rules-recipes)
//I'm storing this elsewhere though
//not because I'm paranoid but because it's a good habit to keep up.
const config = {

  apiKey: firebaseConfig.firebaseConfigDev.apiKey,
  authDomain: firebaseConfig.firebaseConfigDev.authDomain,
  projectId: firebaseConfig.firebaseConfigDev.projectId,
  storageBucket: firebaseConfig.firebaseConfigDev.storageBucket,
  messagingSenderId: firebaseConfig.firebaseConfigDev.messagingSenderId,
  appId: firebaseConfig.firebaseConfigDev.appId,
  measurementId: firebaseConfig.firebaseConfigDev.measurementId
};


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
