import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserPermissionsService } from './utils/user-permissions.service';
import { CanMatchGuard } from './canMatch.service';
import { map } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    canMatch: [
      // CanMatchGuard,
      (route, segments) => inject(UserPermissionsService).isAdmin$,
    ],
    component: AdminDashboardComponent,
  },
  {
    path: 'dashboard',
    canMatch: [
      // CanMatchGuard,
      (route, segments) => {
        const router = inject(Router);
        return inject(UserPermissionsService).isAdmin$.pipe(map((isAdmin) => !isAdmin));
      },
    ],
    component: UserDashboardComponent,
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
