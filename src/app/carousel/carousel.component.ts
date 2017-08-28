import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fpk-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

  slides = [
    {url:'http://via.placeholder.com/1900x1280/FAA', align:'center', alt:'first slide'},
    {url:'http://via.placeholder.com/1900x1280/AFA', align:'center', alt:'second slide'},
    {url:'http://via.placeholder.com/1900x1280/AAF', align:'center', alt:'Third slide'}
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
