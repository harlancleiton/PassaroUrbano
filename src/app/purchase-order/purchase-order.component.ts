import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { OrderModel } from '../shared/order.model'

@Component({
  selector: 'pu-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  //region Variables
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
  public buttonState: string = 'disabled'
  public orderModel: OrderModel
  public purchaseOrderService: PurchaseOrderService
  //endregion Variables

  constructor() { }

  ngOnInit() {
  }

  public updateAddress(address: string): void {
    this.address = address
    this.addressValidPristine = false
    if (this.address.length > 5)
      this.addressValid = true
    else this.addressValid = false
    this.updateButton()
  }

  public updateNumber(number: string): void {
    this.number = number
    this.numberValidPristine = false
    if (this.number.length > 0)
      this.numberValid = true
    else this.numberValid = false
    this.updateButton()
  }

  public updateComplement(complement: string): void {
    this.complement = complement
    this.complementValidPristine = false
    if (this.complement.length > 0)
      this.complementValid = true
    this.updateButton()
  }

  public changePayment(payment: string) {
    this.payment = payment
    this.paymentValidPristine = false
    if (this.payment == 'money' || this.payment == 'debit')
      this.paymentValid = true
    else this.paymentValid = false
    this.updateButton()
  }

  public updateButton(): void {
    if (this.addressValid && this.numberValid && this.paymentValid)
      this.buttonState = ''
    else this.buttonState = 'disabled'
  }

  public makePurchase(): void {
    this.orderModel = new OrderModel(this.address, this.number, this.complement, this.payment)
    this.purchaseOrderService = new PurchaseOrderService()
    this.purchaseOrderService.makePurchase(this.orderModel)
  }
}