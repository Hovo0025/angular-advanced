import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class LoggerService implements Logger {
  prefix = 'root';
  constructor() {}

  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
