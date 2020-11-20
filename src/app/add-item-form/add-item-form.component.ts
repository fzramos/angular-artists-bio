import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importing the communication to angular via forms
import { ArtistItem } from '../shared/artist-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  // Two-Way Data Binding via inputs and outputs
  @Input() item: ArtistItem = new ArtistItem('', '');
  @Output() formSubmit: EventEmitter<ArtistItem> = new EventEmitter()

  constructor() { }
  
  // Creation of onSubmit method to submit our form data
  onSubmit(form: NgForm){
    console.log(this.formSubmit.emit(form.value))
  }

  ngOnInit(): void {
  }

}
