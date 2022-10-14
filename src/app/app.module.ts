import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonReadComponent } from './json-read/json-read.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { JsonFormComponent } from './json-form/json-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';
import { CustomComponent } from './custom/custom.component';
import { ReadCsvService } from './services/read-csv.service';
import { HttpClientModule } from '@angular/common/http';
import { ReadCsvComponent } from './read-csv/read-csv.component';
import { SorticonComponent } from './sorticon/sorticon.component';
import { JsonFormTaskComponent } from './json-form-task/json-form-task.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonReadComponent,
    SearchFilterPipe,
    JsonFormComponent,
    FormFieldComponent,
    CustomComponent,
    ReadCsvComponent,
    SorticonComponent,
    JsonFormTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ReadCsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
