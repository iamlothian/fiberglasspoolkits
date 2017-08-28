import { Injectable } from '@angular/core';

export class Slide {
  url:String;
  alt:String;

  constructor(url:String,alt:String) {
    this.url = url;
    this.alt = alt;
  }
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
