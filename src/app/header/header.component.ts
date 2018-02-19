//region Imports
import { Component, OnInit } from '@angular/core';
import { OffersServices } from '../offers.services';
import { OfferModel } from '../shared/offer.model'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import '../util/rxjs-extensions'
//endregion Imports

@Component({
  selector: 'pu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OffersServices]
})

export class HeaderComponent implements OnInit {

  private offersObservable: Observable<Array<OfferModel>>
  public offersModel: Array<OfferModel>
  private subjectSearch: Subject<string> = new Subject<string>() //Observador e observado

  constructor(private offersServices: OffersServices) { }

  public search(textSearch: string): void {
    console.log('Evento keyup: ', textSearch)
    this.subjectSearch.next(textSearch) //Observado
  }

  ngOnInit() {
    this.offersObservable = this.subjectSearch
      .debounceTime(1000) //Quantidade de tempo a ser esperado antes de executar a ação do switchMap
      .distinctUntilChanged() //Verifica se a nova consulta contem o mesmo termo da anterior
      .switchMap((textSearch: string) => { //O switchMap vai cancelando eventos anteriores a medida que um novo vai surgindo
        console.log('Requisição switchMap')
        if (textSearch.trim() === '') { //Se o campo estiver em branco
          return Observable.of<Array<OfferModel>>([]) //Retorna um Observable of/de um array de ofertas vazio ([])
        }
        else {
          return this.offersServices.searchOffers(textSearch)
        }
      })
      .catch((error: any) => {
        console.log('Erro: ', error)
        return Observable.of<Array<OfferModel>>([])
      })
    //Necessário colocar o subscribe para dizer o que fazer após o retorno do switchMap
    this.offersObservable.subscribe((offers: Array<OfferModel>) => this.offersModel = offers)
  }
}