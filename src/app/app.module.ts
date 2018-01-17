import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// pages
import { ModalGalleryService } from './services/modal-gallery.service';
import { MyKitsComponent } from './my-kits/my-kits.component';
import { EditKitComponent } from './edit-kit/edit-kit.component';
// sub components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { KitComponent } from './kit/kit.component';
import { ModalGalleryComponent, NgbdModalContent } from './modal-gallery/modal-gallery.component';

import { ShellListFilterService } from './services/shell-list-filter.service';
import { ShellRangeService } from './services/range.service';
import { ShellComponent } from './shell/shell.component';
import { ShellListComponent } from './shell-list/shell-list.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { UnitsPipe } from './units.pipe';
import { ShellFilterPipe } from './shell-filter.pipe';

import { NouisliderModule } from 'ng2-nouislider';
import { HomeComponent } from './home/home.component';
import { ShellListFilterComponent } from './shell-list-filter/shell-list-filter.component';

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
    UnitsPipe,
    ShellFilterPipe,
    HomeComponent,
    ShellListFilterComponent
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
    FormsModule,
    NouisliderModule
  ],
  providers: [ShellRangeService, ModalGalleryService, ShellListFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
