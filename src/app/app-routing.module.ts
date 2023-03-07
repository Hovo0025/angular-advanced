import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSidebarComponent } from './user/user-sidebar.component';
import { UserDetailsComponent } from './user/user-details.component';
import { PhotosDetailsComponent } from './photos/photos-details.component';
import { PhotosSidebarComponent } from './photos/photos-sidebar.component';
import { PhotosPageComponent } from './photos/photos-page/photos-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: UserSidebarComponent,
  },
  { path: 'user/:id', outlet: 'details', component: UserDetailsComponent },
  {
    path: 'photos',
    component: PhotosSidebarComponent,
  },
  { path: 'photo/:id', outlet: 'details', component: PhotosDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
