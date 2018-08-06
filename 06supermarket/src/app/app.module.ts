import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleEditableComponent } from './components/style-editable/style-editable.component';
import { CssComponent } from './components/css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleEditableComponent,
    CssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
