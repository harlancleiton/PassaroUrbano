import { Component, OnInit } from '@angular/core';
import { OfferModel } from '../shared/offer.model'
import { OffersServices } from '../services/offers.service'

@Component({
  selector: 'pu-diversion',
  templateUrl: './diversion.component.html',
  styleUrls: ['./diversion.component.css'],
  providers: [OffersServices]
})
export class DiversionComponent implements OnInit {

  public offers: Array<OfferModel>

  constructor(private offersServices: OffersServices) { }

  ngOnInit() {
    this.offersServices.getOffersByCategory('diversion')
    .then((offers: Array<OfferModel>) => {
      this.offers = offers
    })
  }
}