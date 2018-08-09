import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);


