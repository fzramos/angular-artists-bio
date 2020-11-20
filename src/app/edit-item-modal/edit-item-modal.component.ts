import { Component, Inject, OnInit } from '@angular/core';
import { ArtistItem } from 'src/app/shared/artist-item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: ArtistItem) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: ArtistItem){
    this.dialogRef.close(updatedItem)
  }

}
