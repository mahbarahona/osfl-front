import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import localEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localEs,'es')
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
