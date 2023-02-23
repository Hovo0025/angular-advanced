import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { APP_CONFIG, AppConfig } from './app-config';

@Component({
  selector: 'app-use-value',
  templateUrl: './use-value.component.html',
  providers: [],
})
export class UseValueComponent implements OnInit {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}
  ngOnInit(): void {
    console.log('this.appConfig', this.appConfig.experimentalModeEnabled);
  }
}
