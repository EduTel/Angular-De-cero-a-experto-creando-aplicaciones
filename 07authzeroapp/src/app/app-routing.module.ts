import { RouterModule, Routes } from '@angular/router';
// components
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';

import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'protegido',
    component: ProtegidoComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
