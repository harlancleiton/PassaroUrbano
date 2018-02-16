import { Component, OnInit } from '@angular/core';
import { OffersServices } from '../offers.services'
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
    //this.offers = this.offersServices.getOffers()
    this.offersServices.getOffers().then((offers: Array<OfferModel>) => {
      this.offers = offers
      console.log(this.offers)
    }).catch((param: any) => { //Com catch fica mais simples a compreensão
      console.log(param)
    })
    //Pode ser assim:
    /*(offers: Array<OfferModel>) => {
      this.offers = offers
    },
    (param: any) => { console.log(param) }*/
    console.log(this.offers)
  }
}