import { Component, OnInit } from '@angular/core';

import {ModalGalleryService, Slide} from '../modal-gallery.service'

@Component({
  selector: 'fpk-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.css']
})
export class KitComponent implements OnInit {

  constructor(private modalGalleryService:ModalGalleryService) {}

  slides: Slide[];

  openGallery() {
    this.modalGalleryService.open('Fiberglass Pool Kit Shape', this.slides);
  }

  ngOnInit() {

    this.slides = [
      new Slide('http://via.placeholder.com/800x600/FAA',''),
      new Slide('http://via.placeholder.com/900x900/AFA','')
    ]

  }

}
