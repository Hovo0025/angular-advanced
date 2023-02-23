import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class ExperimentalLoggerService implements Logger {
  prefix = 'Experimental';
  constructor() {}

  log(message: string): void {
    console.log(`${this.prefix} (EXPERIMENTAL): ${message}`);
  }
}
