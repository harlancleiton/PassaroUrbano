import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { OrderModel } from '../shared/order.model';
import { Observable } from 'rxjs/Observable'
import { URL_API } from '../app.api'

@Injectable()
export class PurchaseOrderService {

    constructor(private http: Http) { }

    public makePurchase(orderModel: OrderModel): Observable<number> {
        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')
        return this.http.post(
            `${URL_API}/orders`, JSON.stringify(orderModel), new RequestOptions({ headers: headers })
        )
            .map((response: Response) => response.json().id)
    }
}