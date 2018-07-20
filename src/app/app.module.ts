import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyNewComponent } from './properties/property-new/property-new.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

import { PropertyserviceService } from './properties/propertyservice.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyNewComponent,
    PropertyDetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PropertyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
