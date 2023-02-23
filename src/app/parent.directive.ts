import { Directive } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appParent]',
  providers: [LoggerService],
})
export class ParentDirective {
  constructor(private loggerService: LoggerService) {
    this.loggerService.prefix = 'Parent directive';
  }
}
