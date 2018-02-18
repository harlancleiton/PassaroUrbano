import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DiversionComponent } from './diversion/diversion.component';
import { ROUTES } from './app.routes';
import { OfferComponent } from './offer/offer.component';
import { HowUseComponent } from './offer/how-use/how-use.component';
import { WhereIsComponent } from './offer/where-is/where-is.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantsComponent,
    DiversionComponent,
    OfferComponent,
    HowUseComponent,
    WhereIsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
