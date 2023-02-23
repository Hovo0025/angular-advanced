import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClassAndUseExistingComponent } from './components/user-class-and-use-existing.component';
import { RouterModule, Routes } from '@angular/router';
import { LoggerService } from '../logger.service';
import { ExperimentalLoggerService } from '../experimental-logger.service';

const routes: Routes = [{ path: '', component: UserClassAndUseExistingComponent }];

@NgModule({
  declarations: [UserClassAndUseExistingComponent],
  providers: [
    // {
    //   provide: LoggerService,
    //   useClass: ExperimentalLoggerService,
    // },
    LoggerService,
    ExperimentalLoggerService,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserClassAndUseExistingModule {}
