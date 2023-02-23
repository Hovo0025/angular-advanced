import { Component, Inject, Injector, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { APP_CONFIG, CUSTOM_LOGGER } from '../use-value/app-config';
import { Logger } from '../logger';

const loggerFactory = (injector: Injector): Logger => {
  return injector.get(APP_CONFIG).experimentalModeEnabled
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
};

@Component({
  selector: 'app-use-factory',
  templateUrl: './use-factory.component.html',
  providers: [
    {
      provide: CUSTOM_LOGGER,
      useFactory: loggerFactory,
      deps: [Injector],
    },
  ],
})
export class UseFactoryComponent implements OnInit {
  constructor(@Inject(CUSTOM_LOGGER) private logger: Logger) {
    this.logger.log('UseFactoryComponent');
  }
  ngOnInit(): void {}
}
