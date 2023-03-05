import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserInterface } from '../../../user.interface';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user$!: Observable<UserInterface>;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.data.pipe(map((data) => data['user']));
  }
}
