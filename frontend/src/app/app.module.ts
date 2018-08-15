import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS_APP)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
