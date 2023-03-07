import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from './user/user-details.component';
import { UserSidebarComponent } from './user/user-sidebar.component';
import { PhotosDetailsComponent } from './photos/photos-details.component';
import { PhotosSidebarComponent } from './photos/photos-sidebar.component';
import { PhotosPageComponent } from './photos/photos-page/photos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosPageComponent,
    UserSidebarComponent,
    UserDetailsComponent,
    PhotosDetailsComponent,
    PhotosSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
