import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadGuard } from './auth/load.guard';
import { AuthPreloadStrategy } from './auth/auth-preload-strategy';

const routes: Routes = [
  {
    path: 'admin',
    // canLoad: [LoadGuard],
    data: { preload: true, loadAfterSeconds: 2 },
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    data: { preload: true, loadAfterSeconds: 4 },
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules
      // -- preload will not work with canLoad(admin module will not be loaded)
      // -- the reason is that we prevent loading admin module because user can not be logged in and in this case
      // -- load that module is very dangerous and wrong
      preloadingStrategy: AuthPreloadStrategy, // custom preload example
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
