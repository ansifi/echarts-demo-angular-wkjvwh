import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StackchartComponent } from './stackchart.component';
import { LinechartComponent } from './linechart.component';
import { PiechartComponent } from './piechart.component';
import { Line1Component } from './line1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StackchartComponent, LinechartComponent, PiechartComponent, Line1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
