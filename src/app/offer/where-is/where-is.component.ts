import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersServices } from '../../offers.services'

@Component({
  selector: 'pu-where-is',
  templateUrl: './where-is.component.html',
  styleUrls: ['./where-is.component.css'],
  providers: [OffersServices]
})

export class WhereIsComponent implements OnInit {

  public whereIs: string

  constructor(private activatedroute: ActivatedRoute, private offersServices: OffersServices) { }

  ngOnInit() {
    this.offersServices.getWhereIsById(this.activatedroute.parent.snapshot.params['id'])
      .then((whereIs: string) => this.whereIs = whereIs)
  }

}
