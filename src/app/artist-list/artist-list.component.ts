import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';
// Import for the Artist Item Model
import { ArtistItem } from '../shared/artist-item';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  @Input() artistItems: ArtistItem[] = [];

  @Output() delete: EventEmitter<ArtistItem> = new EventEmitter<ArtistItem>();
  constructor( public dialog: MatDialog) { }

  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  ngOnInit(): void {
  }

  onDelete(item: ArtistItem){
    this.delete.emit(item);
  }

  onCardClicked(item: ArtistItem){
    // Show the edit modal

    const dialogref = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    dialogref.afterClosed().subscribe(result => {
      // check if result has a value

      if(result){
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }

}

export interface UpdateEvent {
  old: ArtistItem;
  new: ArtistItem;
}