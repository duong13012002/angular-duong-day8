import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthorDetailComponent } from './authors/author-detail.component';
import { AuthorListComponent } from './authors/author-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AuthorDetailComponent, AuthorListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
