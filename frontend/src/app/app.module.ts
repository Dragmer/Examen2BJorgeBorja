import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { MainMenuComponent } from './main-menu/main-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS_APP),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
