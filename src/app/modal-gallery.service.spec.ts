import { TestBed, inject } from '@angular/core/testing';

import { ModalGalleryService } from './modal-gallery.service';

describe('ModalGallaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalGalleryService]
    });
  });

  it('should be created', inject([ModalGalleryService], (service: ModalGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
