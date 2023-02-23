import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'use-class-and-use-existing',
    loadChildren: () =>
      import('src/app/user-class-and-use-existing/user-class-and-use-existing.module').then(
        (m) => m.UserClassAndUseExistingModule
      ),
  },
  {
    path: 'use-value',
    loadChildren: () => import('src/app/use-value/use-value.module').then((m) => m.UseValueModule),
  },
  {
    path: 'use-factory',
    loadChildren: () => import('src/app/use-factory/use-factory.module').then((m) => m.UseFactoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
