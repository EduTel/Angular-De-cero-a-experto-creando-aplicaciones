import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

const MIROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(MIROUTES, { useHash: true})
    // RouterModule.forChild(routes)
    // CommonModule
  ],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule {}
