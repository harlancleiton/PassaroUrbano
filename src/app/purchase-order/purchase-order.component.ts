import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { OrderModel } from '../shared/order.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pu-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [PurchaseOrderService]
})
export class PurchaseOrderComponent implements OnInit {

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() { }

  public makePurchase(form: NgForm): void {
    console.log(form)
  }
}