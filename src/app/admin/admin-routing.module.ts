import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PermissionsGuard } from '../auth/permissions.guard';
import { ListComponent } from './list/list.component';
import { FormGuard } from '../auth/form.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        canActivateChild: [PermissionsGuard],
        children: [
          { path: 'add-user', canDeactivate: [FormGuard], component: AddUserComponent },
          { path: 'add-product', canDeactivate: [FormGuard], component: AddProductComponent },
        ],
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
