import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../models'

@Component({
  selector: 'fpk-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() asset:Asset
  @Input() title:string
  @Input() description:string
  @Input() alt:string

  constructor() {
  }

  ngOnInit() {
    // grab defaults from asset if not set by inputs
    this.title = this.title ? this.title : this.asset.title
    this.description = this.description ? this.description : this.asset.description
    this.alt = this.title +' '+ this.description
  }

}
