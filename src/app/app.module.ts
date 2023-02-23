import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerService } from './logger.service';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // using Self()resolution modifier angular tries to resolve dependency in current module
  // if not will throw error
  constructor(@Self() private readonly loggerService: LoggerService) {
    this.loggerService.log('Constructor init');
  }
}
