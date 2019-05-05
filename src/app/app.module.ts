import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserService } from './users/user.service';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RepoComponent } from './repo/repo.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoComponent,
    DateCountPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
