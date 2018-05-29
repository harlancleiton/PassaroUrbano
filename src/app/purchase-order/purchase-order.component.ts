import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('form') public form: NgForm;

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() { }

  public makePurchase(): void {
    console.log(this.form)
  }
}