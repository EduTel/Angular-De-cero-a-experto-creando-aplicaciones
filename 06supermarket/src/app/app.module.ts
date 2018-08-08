import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleEditableComponent } from './components/style-editable/style-editable.component';
import { CssComponent } from './components/css/css.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { AsyncComponent } from './components/async/async.component';
import { MarkDirective } from './directivesPersonalized/mark.directive';
import { DirectivesPersonalizedComponent } from './components/directives-personalized/directives-personalized.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleEditableComponent,
    CssComponent,
    NgClassComponent,
    AsyncComponent,
    MarkDirective,
    DirectivesPersonalizedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
