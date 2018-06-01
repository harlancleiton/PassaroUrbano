//region Imports
import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { OrderModel } from '../shared/order.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoppingCartService } from '../services/shopping-cart.service';
//endregion Imports

//region Components
@Component({
  selector: 'pu-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [PurchaseOrderService, ShoppingCartService]
})
//endregion Components

export class PurchaseOrderComponent implements OnInit {

  //region Variables
  public formGroup: FormGroup = new FormGroup({
    'address': new FormControl(null, [Validators.minLength(5), Validators.maxLength(100), Validators.required]),
    'number': new FormControl(null, [Validators.minLength(1), Validators.maxLength(5), Validators.required]),
    'complement': new FormControl(null),
    'payment': new FormControl(null, [Validators.required])
  })
  public idOrder: number
  //endregion Variables

  //region Constructor
  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private shoppingCartService: ShoppingCartService
  ) { }
  //endregion Constructor

  //region Methods
  public makePurchase(): void {
    console.log(this.formGroup)
    let order: OrderModel = new OrderModel(
      this.formGroup.value.address,
      this.formGroup.value.number, this.formGroup.value.complement,
      this.formGroup.value.payment
    )
    this.purchaseOrderService.makePurchase(order)
      .subscribe((idOrder: number) => {
        this.idOrder = idOrder
        console.log(idOrder)
      })
  }
  //endregion Methods

  //region InterfacesMethods
  ngOnInit() {
    console.log('PurchaseOrder - ShoppingCartService: ' + this.shoppingCartService)
  }
  //endregion InterfacesMethods
}