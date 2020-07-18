import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalConfirmModule } from '@akiltech/modal-confirm';

import { AppComponent } from './app.component';
import { InjectedComponent } from './injected/injected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InjectedComponent
  ],
  imports: [
    BrowserModule,
    ModalConfirmModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [InjectedComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
