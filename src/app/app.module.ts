import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { themeConfig } from './config/theme/theme-config';

import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    Ripple
  ],
  providers: [ themeConfig ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
