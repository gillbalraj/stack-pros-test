import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KingInfoComponent } from './king-info/king-info.component';

@NgModule({
  declarations: [
    AppComponent,
    KingInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 