import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { ExperimentalLoggerService } from '../../experimental-logger.service';

@Component({
  selector: 'app-components',
  templateUrl: './user-class-and-use-existing.component.html',
  styleUrls: ['./user-class-and-use-existing.component.scss'],
  providers: [
    {
      // useClass dependency provider will create instance of ExperimentalLoggerService instead of LoggerService
      // Also you can do the same configuration inside service Injectable anotation or in module providers
      provide: LoggerService,
      useClass: ExperimentalLoggerService,
      // Also use class dependency provider will create new instance
      // useExisting: ExperimentalLoggerService,
    },
  ],
})
export class UserClassAndUseExistingComponent implements OnInit {
  constructor(private loggerService: LoggerService, private experimentalLoggerService: ExperimentalLoggerService) {
    // this.loggerService.prefix = 'App Component';
    // this.loggerService.log('Constructor init');
  }

  ngOnInit() {
    // Also use class dependency provider will create new instance
    console.log('loggerService === experimentalLoggerService', this.loggerService === this.experimentalLoggerService);
  }
}
