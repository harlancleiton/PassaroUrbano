export class CartItemModel {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public amount: number,
        public image: object
    ) { }
}