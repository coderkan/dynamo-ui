import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { R2formComponent } from './r2form/r2form/r2form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementComponent } from './r2form/element/element.component';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { CompositeComponent } from './r2form/composite/composite.component';
 
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    R2formComponent,
    ElementComponent,
    CompositeComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
 
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
