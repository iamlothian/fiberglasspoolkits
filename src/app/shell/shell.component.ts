import { Component, OnInit, Input } from '@angular/core';
import {ModalGalleryService, Slide} from '../modal-gallery.service'
import { ShellRange, Shell, Asset, Item, Entity } from '../models'

@Component({
  selector: 'fpk-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  @Input() range:ShellRange

  constructor(private modalGalleryService:ModalGalleryService) {}

  defaultImg:Asset

  private slides: Slide[];
  private selectedShell:number = 0
  private selectedColour:number = 0

  get currentShell():Shell {
    return this.range.shells[this.selectedShell]
  }
  get currentColour():Item {
    return this.range.colours[this.selectedColour]
  }

  openGallery() {
    this.modalGalleryService.open('Fiberglass Pool Kit Shape', this.slides);
  }

  ngOnInit() {
    this.defaultImg = this.range.assets[this.range.defaultAssetId]
    this.selectedShell = this.range.defaultShell
    this.selectedColour = this.range.defaultColour
    this.slides = this.range.assets.map(a=> new Slide(a.url, a.description))
  }

}
