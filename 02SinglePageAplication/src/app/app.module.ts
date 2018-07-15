import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas
import { AppRoutingModule } from './app.routes';
// servicios
import { WriterService } from './servicios/writes.service';
// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { WriterComponent } from './shared/writer/writer.component';
import { AboutComponent } from './shared/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WriterComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WriterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
