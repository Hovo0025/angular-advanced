import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoggerService } from '../logger.service';
import { ExperimentalLoggerService } from '../experimental-logger.service';

import { UseFactoryComponent } from './use-factory.component';

const routes: Routes = [{ path: '', component: UseFactoryComponent }];

@NgModule({
  declarations: [UseFactoryComponent],
  providers: [LoggerService, ExperimentalLoggerService],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UseFactoryModule {}
