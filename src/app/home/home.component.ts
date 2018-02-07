import { Component, OnInit } from '@angular/core';

import { ShellListFilterService } from '../services/shell-list-filter.service'
//import { ShellListFilterComponent } from '../shell-list-filter/shell-list-filter.component'

@Component({
  selector: 'fpk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFavorites:boolean = false;
  listType:"carousel"|"grid" = "carousel"

  constructor(
    private rangeService: ShellListFilterService
  ) { }

  ngOnInit() {
  }

  public get favoritesCount(): number {
    return this.rangeService.getFavorites.length;
  }

  setListType(type:"carousel"|"grid") {
    this.listType = type
  }

}
