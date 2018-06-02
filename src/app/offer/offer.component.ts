//region Imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersServices } from '../services/offers.services'
import { OfferModel } from '../shared/offer.model'
import { Observable } from 'rxjs/Observable'
import { Observer, Subscription } from 'rxjs/Rx';
import 'rxjs/Rx'
import { ShoppingCartService } from '../services/shopping-cart.service';
//endregion Imports

//region Components
@Component({
  selector: 'pu-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersServices]
})
//endregion Components

export class OfferComponent implements OnInit, OnDestroy {

  //region Variables
  public offerModel: OfferModel
  private timeSubscription: Subscription
  //endregion Variables

  //region Constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private offersServices: OffersServices,
    private shoppingCartService: ShoppingCartService
  ) { }
  //endregion Constructor

  //region Methods
  public addToCart(): void {
    this.shoppingCartService.addToCart(this.offerModel)
    console.log('OfferComponent: ', this.shoppingCartService.cartItemModel)
  }
  //endregion Methods

  //region InterfacesMethods
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.offersServices.getOffersById(params.id)
        .then((offerModel: OfferModel) => {
          this.offerModel = offerModel
        })
    })
  }

  ngOnDestroy() {
  }
  //endregion InterfacesMethods
}