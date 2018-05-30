import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { OrderModel } from '../shared/order.model'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'pu-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [PurchaseOrderService]
})
export class PurchaseOrderComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    'address': new FormControl(null),
    'number': new FormControl(null),
    'complement': new FormControl(null),
    'payment': new FormControl(null)
  })
  public idOrder: number

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() { }

  /*
  public makePurchase(): void {
    let orderModel: OrderModel = new OrderModel(this.form.value.address, this.form.value.number,
      this.form.value.complement, this.form.value.payment)
    this.purchaseOrderService.makePurchase(orderModel)
      .subscribe((idOrder: number) => {
        this.idOrder = idOrder
        console.log('ID pedido: ' + idOrder)
      })
  }
  */
}