import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { CapitalizadoPipe } from './pipe/capitalisado.pipe';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { PasswordPipe } from './password.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomSanitizerPipe, PasswordPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
