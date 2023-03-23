import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, HttpClientModule],
})
export class AboutModule {}
