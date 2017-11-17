import { Component, OnInit, Input } from '@angular/core';
import {ModalGalleryService, Slide} from '../modal-gallery.service'
import { ShellRange, Shell, Asset, Item, Entity } from '../models'
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: '[fpk-shell]',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  providers: [NgxCarousel]
})
export class ShellComponent implements OnInit {

  @Input() range:ShellRange

  constructor(
    private modalGalleryService:ModalGalleryService,
    public config: NgxCarousel
  ) {}

  defaultImg:Asset
  expanded:boolean

  private slides: Slide[];
  selectedShell:number = 0
  selectedColour:number = 0

  get currentShell():Shell {
    return this.range.shells[this.selectedShell]
  }
  get currentColour():Item {
    return this.range.colours[this.selectedColour]
  }

  selectShell(index:number) {
    this.selectedShell = index
  }

  selectColour(index:number) {
    this.selectedColour = index
  }

  openGallery() {
    this.modalGalleryService.open('Fiberglass Pool Kit Shape', this.slides);
  }

  onShellChange(data: NgxCarouselStore) {
    this.selectedShell = data.currentSlide;
  }
  onColourChange(data: NgxCarouselStore) {
    this.selectedColour = data.currentSlide;
  }

  ngOnInit() {
    this.selectedShell = this.range.defaultShell || 0
    this.selectedColour = this.range.defaultColour || 0
    this.defaultImg = this.range.assets[this.range.defaultAssetId || 0]
    this.slides = this.range.assets.map(a=> new Slide(a.url, a.description))

    this.config = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: true
      },
      touch: true,
      loop: false,
      custom: 'banner'
    }
  }

}
