import { Component, OnInit } from '@angular/core';
import { OfferModel } from '../shared/offer.model'
import { OffersServices } from '../services/offers.services'

@Component({
  selector: 'pu-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [OffersServices]
})
export class RestaurantsComponent implements OnInit {

  public offers: Array<OfferModel>

  constructor(private offersServices: OffersServices) { }

  ngOnInit() {
    this.offersServices.getOffersByCategory('restaurant')
    .then((offers: Array<OfferModel>) => {
      this.offers = offers
    })
  }
}