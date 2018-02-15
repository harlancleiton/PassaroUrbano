import { Component, OnInit } from '@angular/core';
import { OffersServices } from '../offers.service'
import { OfferModel } from '../shared/offer.model'

@Component({
  selector: 'pu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersServices]
})
export class HomeComponent implements OnInit {

  public offers: Array<OfferModel>

  constructor(private offersServices: OffersServices) { }

  ngOnInit() {
    this.offers = this.offersServices.getOffers()
    console.log( this.offersServices.getOffers())
  }
}