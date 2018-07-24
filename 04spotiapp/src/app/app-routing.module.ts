import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const MIROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
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
