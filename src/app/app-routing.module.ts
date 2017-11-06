import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellListComponent } from './shell-list/shell-list.component'
// import { KitsComponent } from './kits/kits.component'
// import { MyKitsComponent } from './my-kits/my-kits.component'
// import { EditKitComponent } from './edit-kit/edit-kit.component'

const routes: Routes = [
  { path: '', redirectTo: '/shells', pathMatch: 'full' },
  { path: 'shells',  component: ShellListComponent },
  //{ path: 'mykits', component:MyKitsComponent },
  //{ path: 'mykits/:id/edit', component:EditKitComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
