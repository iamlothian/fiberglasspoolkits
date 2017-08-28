import { Component, OnInit } from '@angular/core';

import { KitsFilterComponent } from '../kits-filter/kits-filter.component'

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {

  kits = [
    {},{},{},{},{},{}
  ]

  constructor() { }

  ngOnInit() {
  }

}
