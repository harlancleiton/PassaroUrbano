import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pu-purchase-order-success',
  templateUrl: './purchase-order-success.component.html',
  styleUrls: ['./purchase-order-success.component.css']
})
export class PurchaseOrderSuccessComponent implements OnInit {

  @Input() public idOrder: number

  constructor() { }

  ngOnInit() {
  }
}