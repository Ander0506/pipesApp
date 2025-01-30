import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MyPreset } from './config/theme/theme-config';

// Cofiguración del locale de la app
import localeEsCO from '@angular/common/locales/es-CO';
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsCO );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'es-CO' },
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
          preset: MyPreset,
          options: {
            cssLayer: {
                name: 'primeng',
                order: 'tailwind-theme, tailwind-base, primeng, tailwind-utilities'
            }
        },
      }
    }) ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
