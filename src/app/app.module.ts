import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Instructions ---->
// Replace configPlaceholder with your firebase credentials
import { environment } from '../environments/environment';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UiModule } from './ui/ui.module';


const config = {
  apiKey: "AIzaSyAbW1I3_5YI2x4BVONTXaLWB9oDLZjmqws",
  authDomain: "gallery-51f6c.firebaseapp.com",
  databaseURL: "https://gallery-51f6c.firebaseio.com",
  projectId: "gallery-51f6c",
  storageBucket: "gallery-51f6c.appspot.com",
  messagingSenderId: "749357181325"
};


@NgModule({
  declarations: [AppComponent, DropzoneDirective, UploaderComponent, UploadTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
