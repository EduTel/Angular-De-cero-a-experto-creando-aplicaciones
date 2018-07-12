import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './shared/about/about.component';
import { WriterComponent } from './shared/writer/writer.component';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent   },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  // imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*
  import { RouterModule, Routes } from '@angular/router';

  const routes: Routes = [
    { path: 'routePath', component: Component },
    { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
  ];
  export const appRouting = RouterModule.forRoot(routes);
*/

