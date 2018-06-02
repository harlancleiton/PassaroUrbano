import { CartItemModel } from "./cart-item.model";

export class OrderModel {
    constructor(
        public address: string,
        public number: string,
        public complement: string,
        public payment: string,
        public cartItemModel: Array<CartItemModel>
    ) { }
}