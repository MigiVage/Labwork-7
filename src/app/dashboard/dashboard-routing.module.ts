import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'welcome',
        loadChildren: '../welcome/welcome.module#WelcomePageModule'
      },
      {
        path: 'songs',
        loadChildren: '../songs/songs.module#SongsPageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
