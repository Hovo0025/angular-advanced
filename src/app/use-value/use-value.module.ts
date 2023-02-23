import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoggerService } from '../logger.service';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { UseValueComponent } from './use-value.component';
import { APP_CONFIG, AppConfig } from './app-config';

const routes: Routes = [{ path: '', component: UseValueComponent }];

@NgModule({
  declarations: [UseValueComponent],
  providers: [
    LoggerService,
    ExperimentalLoggerService,
    // {
    // provide: APP_CONFIG,
    // useValue: { experimentalModeEnabled: true },
    // useValue: ((): AppConfig => ({ experimentalModeEnabled: true }))(),
    // },
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UseValueModule {}
