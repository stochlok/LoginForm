import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { loginComponent } from './components/login/login.component';

import { AduserService } from './aduser.service';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    component: loginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ AduserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
