import { Component, OnInit, Input } from '@angular/core';
//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'fpk-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgxCarousel]
})
export class CarouselComponent implements OnInit {

  slides = [
    {url:'./assets/images/feature/1.jpg', align:'center', alt:'first slide'},
    {url:'./assets/images/feature/2.jpg', align:'center', alt:'second slide'},
    {url:'./assets/images/feature/3.jpg', align:'center', alt:'Third slide'}
  ]

  constructor(
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

}
