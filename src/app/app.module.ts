import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import for the shared module and ALL of its components
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';

import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistItemCardComponent } from './artist-list/artist-item-card/artist-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    ArtistListComponent,
    ArtistItemCardComponent,
    EditItemModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
