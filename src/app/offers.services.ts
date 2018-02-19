//region Imports
import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { OfferModel } from './shared/offer.model'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'
import { URL_API } from './app.api'
import { Observable } from 'rxjs/Observable'
//endregion Imports

@Injectable()
export class OffersServices {

    constructor(private http: Http) { }

    //Efetuar uma requisição Http e retornar uma promise do tipo OfferModel
    public getOffers(): Promise<Array<OfferModel>> {
        return this.http.get(`${URL_API}/offers`)
            .toPromise()
            .then((answer: Response) => answer.json())
    }

    public getOffersByCategory(category: string): Promise<Array<OfferModel>> {
        return this.http.get(`${URL_API}/offers?category=${category}`)
            .toPromise()
            .then((answer: Response) => answer.json())
    }

    public getOffersById(id: number): Promise<OfferModel> {
        return this.http.get(`${URL_API}/offers?id=${id}`)
            .toPromise()
            .then((answer: Response) => answer.json().shift())
    }

    public getHowUseById(id: number): Promise<string> {
        return this.http.get(`${URL_API}/how-use?id=${id}`)
            .toPromise()
            .then((answer: Response) => answer.json().shift().description)
    }

    public getWhereIsById(id: number): Promise<string> {
        return this.http.get(`${URL_API}/where-is?id=${id}`)
            .toPromise()
            .then((answer: Response) => answer.json().shift().description)
    }

    //Efetuar uma requisição Http e retornar um Observable do tipo OfferModel
    public searchOffers(text: string): Observable<Array<OfferModel>> {
        return this.http.get(`${URL_API}/offers?description_like=${text}`)
            .retry(5) //Se algo dê errado, tentar n vezes
            .map((answer: Response) => answer.json())
    }
}