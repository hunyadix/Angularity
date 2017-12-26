import { Component, OnInit } from '@angular/core';
import { GuideService } from './guide.service';
import { ITip } from '../tip'

@Component({
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

export class GuideComponent implements OnInit {

  title: string = "Tips and tricks"
  tips: ITip[] = []
  errorMessage: string

  constructor(private _guideService: GuideService) { }

  ngOnInit() : void
  {
    this._guideService.getTips()
      .subscribe(tips => this.tips = tips,
        error => this.errorMessage = <any>error)
  }

}
