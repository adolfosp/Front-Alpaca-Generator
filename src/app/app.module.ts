import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoUndescore } from 'src/pipes/texto-undescore.pipe';
import { TextoCapitalize } from '../pipes/texto-capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextoUndescore,
    TextoCapitalize
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
