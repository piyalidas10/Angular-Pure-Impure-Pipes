import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PercentagePipe } from './pure/percentage.pipe';
import { FormatPipe } from './impure/format.pipe';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from './pure/json.pipe';
import { FilterPipe } from './pure/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    FormatPipe,
    JsonPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
