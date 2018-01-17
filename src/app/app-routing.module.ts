import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
// import { KitsComponent } from './kits/kits.component'
// import { MyKitsComponent } from './my-kits/my-kits.component'
// import { EditKitComponent } from './edit-kit/edit-kit.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  //{ path: 'mykits', component:MyKitsComponent },
  //{ path: 'mykits/:id/edit', component:EditKitComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
