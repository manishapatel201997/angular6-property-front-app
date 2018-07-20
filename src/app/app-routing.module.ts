

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyNewComponent } from './properties/property-new/property-new.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';

import { PropertyserviceService } from './properties/propertyservice.service';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'properties', component: PropertyListComponent},
  { path: 'properties', component: PropertyNewComponent},
  { path: 'properties', component: PropertyDetailsComponent},
  
];


@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
