import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersServices } from '../offers.services'
import { OfferModel } from '../shared/offer.model'

@Component({
  selector: 'pu-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersServices]
})
export class OfferComponent implements OnInit {

  public offerModel: OfferModel

  constructor(private activatedRoute: ActivatedRoute, private offersServices: OffersServices) { }

  ngOnInit() {
    this.offersServices.getOffersById(this.activatedRoute.snapshot.params['id'])
      .then((offerModel: OfferModel) => {
        this.offerModel = offerModel
      })
    /*
  //Subscribe fica assistindo alterações na rota (Observable)
  this.activatedRoute.params.subscribe(
    (param: any) => console.log("Param: ", param),
    (error: any) => console.log('Erro: ', error),
    () => console.log('Processamento foi classificado como concluido.')
  )
  */
  }
}