import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import {HomeComponent} from './components/home/home.component';
import {ArtistsComponent} from './components/artists/artists.component';
import {PlaylistComponent} from './components/playlist/playlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'artists',component:ArtistsComponent},
  {path:'playlist',component:PlaylistComponent},

  // {
  //   path:'',
  //   component:SidebarComponent,
  //   children:[
  //     {
  //       path:'home',
  //       loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule)
  //     },
  //     {
  //       path:'artists',
  //       loadChildren:()=>import('./components/artists/artists.module').then(m=>m.ArtistsModule)
  //     },
  //     {
  //       path:'playlist',
  //       loadChildren:()=>import('./components/playlist/playlist.module').then(m=>m.PlaylistModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
