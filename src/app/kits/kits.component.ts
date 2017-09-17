import { Component, OnInit } from '@angular/core';

import { KitsFilterComponent } from '../kits-filter/kits-filter.component'

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {

  kits = [
    {id:0},{id:1},{id:2},{id:3},{id:4},{id:5}
  ]

  constructor() { }

  ngOnInit() {
  }

}
