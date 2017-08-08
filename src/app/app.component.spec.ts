/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MetroService } from './services/metro.service';
import { ApiService } from './services/api.service';
import { DataTableModule, DropdownModule, SharedModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ AppComponent ],
    imports: [ FormsModule, DropdownModule, DataTableModule,
      SharedModule, HttpModule,BrowserAnimationsModule,
      AgmCoreModule.forRoot({
        apiKey: environment.API_KEY
      })
    ]
  })
  .overrideComponent(AppComponent, {
    set: {providers: [ MetroService, ApiService ]}
    })
  .compileComponents();
}));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
