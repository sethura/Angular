import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

import { SpotifyService } from './spotify.service';
import { routing } from './app.routes'; // Contains all routing information


@NgModule({
	// Specify components
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
	// Specify modules used
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		routing
  ],
  providers: [SpotifyService], // Import service
  bootstrap: [AppComponent]
})
export class AppModule { }
