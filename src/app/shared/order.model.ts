export class OrderModel {
    constructor(
        public address: string,
        public number: string,
        public complement: string,
        public payment: string
    ) { }
}