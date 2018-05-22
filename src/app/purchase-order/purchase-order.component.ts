import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  public address: string = ''
  public number: string = ''
  public complement: string = ''
  public payment: string = ''
  public addressValid: boolean
  public numberValid: boolean
  public complementValid: boolean
  public paymentValid: boolean
  public addressValidPristine: boolean = true
  public numberValidPristine: boolean = true
  public complementValidPristine: boolean = true
  public paymentValidPristine: boolean = true

  constructor() { }

  ngOnInit() {
  }

  public updateAddress(address: string): void {
    this.address = address
    this.addressValidPristine = false
    if (this.address.length > 5)
      this.addressValid = true
    else
      this.addressValid = false
  }

  public updateNumber(number: string): void {
    this.number = number
    console.log(this.number)
  }

  public updateComplement(complement: string): void {
    this.complement = complement
    console.log(this.complement)
  }

  public changePayment(payment: string) {
    this.payment = payment
    console.log(this.payment)
  }
}