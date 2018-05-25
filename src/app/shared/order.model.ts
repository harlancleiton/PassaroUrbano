export class OrderModel {
    constructor(
        public address: string,
        public number: string,
        public complement,
        public payment: string
    ) { }
}