import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlantsComponent } from './plants/plants.component';
import { SeedsComponent } from './seeds/seeds.component';
import { PlantersComponent } from './planters/planters.component';
import { PlantCareComponent } from './plant-care/plant-care.component';
import { LearnComponent } from './learn/learn.component';
import { GiftingComponent } from './gifting/gifting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    PlantsComponent,
    SeedsComponent,
    PlantersComponent,
    PlantCareComponent,
    LearnComponent,
    GiftingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
