import { Injectable } from '@angular/core';

export class Slide {
  constructor(
    public url:String,
    public alt:String,
    public caption:String = undefined
  ) {}
}

@Injectable()
export class ModalGalleryService {

  openFunction:Function;

  constructor() { }

  onOpen(open:Function) {
    this.openFunction = open;
  }

  onClose() {

  }

  open(title:String, slides:Slide[]){
    this.openFunction(title, slides);
  }

  close(){

  }

}
