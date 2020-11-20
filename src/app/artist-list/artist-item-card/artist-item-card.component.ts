import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArtistItem } from 'src/app/shared/artist-item';

@Component({
  selector: 'app-artist-item-card',
  templateUrl: './artist-item-card.component.html',
  styleUrls: ['./artist-item-card.component.scss']
})
export class ArtistItemCardComponent implements OnInit {

  @Input() item: ArtistItem | any;

  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();

  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  onXButtonClick(){
    // here we want to emit an event
    this.xButtonClick.emit();
  }

  onCardClick(){
    this.cardClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
