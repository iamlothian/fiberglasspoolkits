import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KitsComponent } from './kits/kits.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KitsFilterComponent } from './kits-filter/kits-filter.component';
import { CarouselComponent } from './carousel/carousel.component';
import { KitComponent } from './kit/kit.component';
import { ModalGalleryComponent, NgbdModalContent } from './modal-gallery/modal-gallery.component';

import { ModalGalleryService } from './modal-gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    KitsComponent,
    HeaderComponent,
    FooterComponent,
    KitsFilterComponent,
    CarouselComponent,
    KitComponent,
    NgbdModalContent,
    ModalGalleryComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ModalGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
