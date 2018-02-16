import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { OfferModel } from './shared/offer.model'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class OffersServices {

    constructor(private http: Http) { }

    //Efetuar uma requisição Http e retornar uma promise do tipo OfferModel
    public getOffers(): Promise<Array<OfferModel>> {
        return this.http.get('http://localhost:3000/ofertas')
        .toPromise()
        .then((answer: any) => answer.json())
    }

    //region Offers Estaticas
    /*
    public offers: Array<OfferModel> = [
        {
            id: 1,
            category: "restaurante",
            title: "Super Burger",
            description: "Rodízio de Mini-hambúrger com opção de entrada.",
            advertiser: "Original Burger",
            value: 29.90,
            featured: true,
            images: [
                { url: "/assets/ofertas/1/img1.jpg" },
                { url: "/assets/ofertas/1/img2.jpg" },
                { url: "/assets/ofertas/1/img3.jpg" },
                { url: "/assets/ofertas/1/img4.jpg" }
            ]
        },
        {
            id: 2,
            category: "restaurante",
            title: "Cozinha Mexicana",
            description: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            advertiser: "Mexicana",
            value: 32.90,
            featured: true,
            images: [
                { url: "/assets/ofertas/2/img1.jpg" },
                { url: "/assets/ofertas/2/img2.jpg" },
                { url: "/assets/ofertas/2/img3.jpg" },
                { url: "/assets/ofertas/2/img4.jpg" }
            ]

        },
        {
            id: 4,
            category: "diversao",
            title: "Estância das águas",
            description: "Diversão garantida com piscinas, trilhas e muito mais.",
            advertiser: "Estância das águas",
            value: 31.90,
            featured: true,
            images: [
                { url: "/assets/ofertas/3/img1.jpg" },
                { url: "/assets/ofertas/3/img2.jpg" },
                { url: "/assets/ofertas/3/img3.jpg" },
                { url: "/assets/ofertas/3/img4.jpg" },
                { url: "/assets/ofertas/3/img5.jpg" },
                { url: "/assets/ofertas/3/img6.jpg" }
            ]
        }
    ]
    */
    //endregion Offers Estaticas

    //region Promise
    /*
    public getOffersPromise(): Promise<Array<OfferModel>> {
        return new Promise((resolve, reject) => {
            let action: boolean = true
            if (action) //Simular um metodo assincrono
                setTimeout(() => resolve(this.offers), 3000)
            else
                reject({ code: 404, message: 'Servidor não encontrado' })
        }).then((offers: Array<OfferModel>) => {//Encadeando then. Esses metodos funcionam de forma SINCRONA
            console.log("Primeiro then encadeado")
            return offers
        }).then((offers: Array<OfferModel>) => {//Encadeando then. Esses metodos funcionam de forma SINCRONA
            console.log("Segundo then encadeado")
            return new Promise((success, failure) => {//Nova promise
                console.log("Segundo then encadeado - Promise")
                setTimeout(() => { success(offers) }, 3000)
            })
        }).then((offers: Array<OfferModel>) => {//Encadeando then. Esses metodos funcionam de forma SINCRONA
            console.log("Terceiro then encadeado")
            return offers
        })//.then ...
    }
    */
    //endregion Promise
}