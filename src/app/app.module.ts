import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { AppComponent }  from './app.component';
import { ApiService } from './services/api.service';
import { MetroService } from './services/metro.service';
import { DataTableModule, DropdownModule, SharedModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    DropdownModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: process.env.API_KEY
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ApiService,
    MetroService
  ]
})
export class AppModule { }
