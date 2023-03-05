import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$!: Observable<boolean | unknown>;
  showLoaderEvents$!: Observable<boolean>;
  hideLoaderEvent$!: Observable<boolean>;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.showLoaderEvents$ = this.router.events.pipe(
      filter((el) => el instanceof ResolveStart),
      mapTo(true)
    );

    this.hideLoaderEvent$ = this.router.events.pipe(
      filter((el) => el instanceof ResolveEnd),
      mapTo(false)
    );

    this.isLoading$ = merge(this.showLoaderEvents$, this.hideLoaderEvent$);
  }
}
