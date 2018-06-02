import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersServices } from '../../services/offers.service'

@Component({
  selector: 'pu-how-use',
  templateUrl: './how-use.component.html',
  styleUrls: ['./how-use.component.css'],
  providers: [OffersServices]
})

export class HowUseComponent implements OnInit {

  public howUse: string = ''

  constructor(private activatedRoute: ActivatedRoute, private offersServices: OffersServices) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe((params: Params) => {
      this.offersServices.getHowUseById(params.id)
        .then((howUse: string) => this.howUse = howUse)
    })
  }
}