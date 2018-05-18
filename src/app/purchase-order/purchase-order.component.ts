import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  public address: string = 'Rua ABC'
  public number: number = 0
  public complement: string = 'Av 00'
  public payment: string = 'money'

  constructor() { }

  ngOnInit() {
  }

  public updateAddress(address: string): void {
    this.address = address
    console.log(this.address)
  }

  public updateNumber(number: number): void {
    this.number = number
    console.log(this.number)
  }

  public updateComplement(complement: string): void {
    this.complement = complement
    console.log(this.complement)
  }

  public changePayment (payment: string) {
    this.payment = payment
    console.log(this.payment)
  }
}