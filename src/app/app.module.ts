import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StackchartComponent } from './stackchart.component';
import { LinechartComponent } from './linechart.component';
import { PiechartComponent } from './piechart.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StackchartComponent, LinechartComponent, PiechartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
