import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { ReducedDescription } from './util/reduced-description.pipe';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderSuccessComponent } from './purchase-order-success/purchase-order-success.component'


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
    WhereIsComponent,
    ReducedDescription,
    PurchaseOrderComponent,
    PurchaseOrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-Br' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
