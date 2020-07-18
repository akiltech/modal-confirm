import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalConfirmModule } from '@akiltech/modal-confirm';

import { AppComponent } from './app.component';
import { InjectedComponent } from './injected/injected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    InjectedComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ModalConfirmModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [InjectedComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
