import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

import {ModalGalleryService, Slide} from '../services/modal-gallery.service'

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css'],
  providers: [NgxCarousel]
})
export class NgbdModalContent {
  @Input() slides;
  @Input() title;

  constructor(
    public activeModal: NgbActiveModal,
    public config: NgxCarousel
  ) {}

  ngOnInit() {
    // customize default values of carousels used by this component tree
    this.config = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  currentSlide:number = 0;
  onmoveFn(data: NgxCarouselStore) {
    this.currentSlide = data.currentSlide;
    console.log(data);
  }

}

@Component({
  selector: 'modal-gallery',
  template: ``
})
export class ModalGalleryComponent {

  constructor(
    private modalService: NgbModal,
    private modalGalleryService: ModalGalleryService
  ) {

    modalGalleryService.onOpen((t:String, s:Slide[]) => {
      this.open(t,s);
    });

  }

  open(title:String, slides:Slide[]) {
    const modalRef = this.modalService.open(NgbdModalContent, { size: 'lg', windowClass: 'modal-gallery' });
    modalRef.componentInstance.slides = slides;
    modalRef.componentInstance.title = title;
  }
}
