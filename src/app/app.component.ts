import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService],
})
export class AppComponent {
  constructor(
    // if service not provided will return null instade of error
    // @Optional() private loggerService: LoggerService

    // will try to resolve dependenci in current element injector if not will throw error
    // also we can provide it not only in components but in modules also// See app module
    // will create new instance
    @Self() private loggerService: LoggerService,
    // SkipSelf() resolution modifier will skip resolving dependency in current element Injector
    // and will try to resolve dependency in parent Injector hierarcies
    // wil create new instance
    @SkipSelf() private anotherLogger: LoggerService
  ) {
    this.loggerService.prefix = 'App Component';
    this.loggerService.log('Constructor init');

    this.anotherLogger.prefix = 'Another Component';
    this.anotherLogger.log('Constructor init');
  }
}
