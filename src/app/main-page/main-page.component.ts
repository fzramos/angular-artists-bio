import { Component, OnInit } from '@angular/core';
import { ArtistItem } from '../shared/artist-item';

import { UpdateEvent } from '../artist-list/artist-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  artistItems: ArtistItem[] = new Array<ArtistItem>()

  constructor() { }

  ngOnInit(): void {
  }

  addArtist(newItem: ArtistItem){
    this.artistItems.push(newItem);
  }

  deleteArtist(item: ArtistItem){
    let index = this.artistItems.indexOf(item);
    this.artistItems.splice(index, 1);
  }

  updateArtist(updateEvent: UpdateEvent){
    // replace the item with the updated/submitted item from the form
    this.artistItems[this.artistItems.indexOf(updateEvent.old)] = updateEvent.new;
  }

}
