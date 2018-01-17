import { Component, OnInit } from '@angular/core';

import { ShellListFilterComponent } from '../shell-list-filter/shell-list-filter.component'

@Component({
  selector: 'fpk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFavorites:boolean = false;
  listType:"carousel"|"grid" = "carousel"

  constructor() { }

  ngOnInit() {
  }

  setListType(type:"carousel"|"grid") {
    this.listType = type
  }

}