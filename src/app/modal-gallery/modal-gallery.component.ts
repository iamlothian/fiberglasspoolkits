import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {ModalGalleryService, Slide} from '../modal-gallery.service'

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css']
})
export class NgbdModalContent {
  @Input() slides;
  @Input() title;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'modal-gallery',
  template: ``
})
export class ModalGalleryComponent {

  constructor(private modalService: NgbModal, private modalGalleryService: ModalGalleryService) {

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
