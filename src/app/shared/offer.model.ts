export class OfferModel {
    public id: number
    public category: string
    public title: string
    public description: string
    public advertiser: string
    public value: number
    public featured: boolean
    public images: Array<object>
}