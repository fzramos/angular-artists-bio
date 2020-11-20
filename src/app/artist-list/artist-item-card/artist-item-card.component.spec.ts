import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistItemCardComponent } from './artist-item-card.component';

describe('ArtistItemCardComponent', () => {
  let component: ArtistItemCardComponent;
  let fixture: ComponentFixture<ArtistItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
