import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataDumpComponent } from './data-dump/data-dump.component';
import { TasksService } from "./data-dump/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    DataDumpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
