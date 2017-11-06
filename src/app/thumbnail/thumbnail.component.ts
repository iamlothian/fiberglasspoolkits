import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../models'

@Component({
  selector: 'fpk-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() asset:Asset

  constructor() { }

  ngOnInit() {
  }

}
