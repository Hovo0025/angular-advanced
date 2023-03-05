import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule],
  declarations: [UserComponent, UserListComponent],
  exports: [UserComponent, UserListComponent],
})
export class UserModule {}
