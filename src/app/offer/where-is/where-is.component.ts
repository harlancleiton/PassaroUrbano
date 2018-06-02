import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersServices } from '../../services/offers.services'

@Component({
  selector: 'pu-where-is',
  templateUrl: './where-is.component.html',
  styleUrls: ['./where-is.component.css'],
  providers: [OffersServices]
})

export class WhereIsComponent implements OnInit {

  public whereIs: string

  constructor(private activatedRoute: ActivatedRoute, private offersServices: OffersServices) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe((params: Params) => {
      this.offersServices.getWhereIsById(params.id)
        .then((whereIs: string) => {
          this.whereIs = whereIs
        })
    })
  }
}