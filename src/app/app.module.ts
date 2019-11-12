import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { R2formComponent } from './r2form/r2form/r2form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementComponent } from './r2form/element/element.component';

@NgModule({
  declarations: [
    AppComponent,
    R2formComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
