import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$!: Observable<UserInterface[]>;

  constructor(private readonly userSrv: UserService) {}
  ngOnInit(): void {
    this.users$ = this.userSrv.getUsers();
  }
}
