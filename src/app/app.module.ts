import { AccordionModule } from './accordion/accordion.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
