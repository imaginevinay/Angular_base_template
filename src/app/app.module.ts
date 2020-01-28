import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialImportsModule} from './commons/materialimports'
//--------------COMPONENTS-----------------------------------------------------//
import { SidebarComponent } from './components/sidebar/sidebar.component'
import {HomeComponent} from './components/home/home.component';
import {ArtistsComponent} from './components/artists/artists.component';
import {PlaylistComponent} from './components/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ArtistsComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
