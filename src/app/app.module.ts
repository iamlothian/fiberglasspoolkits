import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// pages
import { ModalGalleryService } from './modal-gallery.service';
import { MyKitsComponent } from './my-kits/my-kits.component';
import { EditKitComponent } from './edit-kit/edit-kit.component';
// sub components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { KitComponent } from './kit/kit.component';
import { ModalGalleryComponent, NgbdModalContent } from './modal-gallery/modal-gallery.component';


import { ShellRangeService } from './services/range.service';
import { ShellComponent } from './shell/shell.component';
import { ShellListComponent } from './shell-list/shell-list.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { UnitsPipe } from './units.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    KitComponent,
    NgbdModalContent,
    ModalGalleryComponent,
    MyKitsComponent,
    EditKitComponent,
    ShellComponent,
    ShellListComponent,
    ThumbnailComponent,
    UnitsPipe
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxCarouselModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ShellRangeService, ModalGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
