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
import { WritersComponent } from './shared/writers/writers.component';
import { WriterComponent } from './shared/writer/writer.component';
import { AboutComponent } from './shared/about/about.component';
import { ShowSearchWriterComponent } from './shared/show-search-writer/show-search-writer.component';
import { CardComponent } from './shared/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WritersComponent,
    WriterComponent,
    AboutComponent,
    ShowSearchWriterComponent,
    CardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WriterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
