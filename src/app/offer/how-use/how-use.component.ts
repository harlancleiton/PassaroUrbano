import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersServices } from '../../offers.services'

@Component({
  selector: 'pu-how-use',
  templateUrl: './how-use.component.html',
  styleUrls: ['./how-use.component.css'],
  providers: [OffersServices]
})

export class HowUseComponent implements OnInit {

  public howUse: string = ''

  constructor(private activatedroute: ActivatedRoute, private offersServices: OffersServices) { }

  ngOnInit() {
    this.offersServices.getHowUseById(this.activatedroute.parent.snapshot.params['id'])
      .then((howUse: string) => this.howUse = howUse)
  }

}