import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersServices } from '../offers.services'
import { OfferModel } from '../shared/offer.model'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
import { Observer } from 'rxjs/Rx';

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
    //Observado
    let observado = Observable.create((observer: Observer<string>) => {
        observer.next('Primeiro evento da stream')
        observer.next('Segundo evento da stream')
        observer.complete()
        observer.error('Error')
        observer.next('Terceiro evento da stream')
    })
    //Observador
    observado.subscribe(
      (param: any) => console.log(param),
      (error: string) => console.log(error),
      () => console.log('Sucesso')
    )

    /*
    let time = Observable.interval(3000)
    time.subscribe((interval: number) => console.log(interval))
    this.offersServices.getOffersById(this.activatedRoute.snapshot.params['id'])
      .then((offerModel: OfferModel) => {
        this.offerModel = offerModel
      })
      */
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