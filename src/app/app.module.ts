import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// pages
import { KitsComponent } from './kits/kits.component';
import { ModalGalleryService } from './modal-gallery.service';
import { MyKitsComponent } from './my-kits/my-kits.component';
import { EditKitComponent } from './edit-kit/edit-kit.component';
// sub components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KitsFilterComponent } from './kits-filter/kits-filter.component';
import { CarouselComponent } from './carousel/carousel.component';
import { KitComponent } from './kit/kit.component';
import { ModalGalleryComponent, NgbdModalContent } from './modal-gallery/modal-gallery.component';


import { KitService } from './kit.service';

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
    ModalGalleryComponent,
    MyKitsComponent,
    EditKitComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [KitService, ModalGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
