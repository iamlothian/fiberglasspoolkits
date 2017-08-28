import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KitsComponent } from './kits/kits.component'

const routes: Routes = [
  { path: '', redirectTo: '/kits', pathMatch: 'full' },
  { path: 'kits',  component: KitsComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
