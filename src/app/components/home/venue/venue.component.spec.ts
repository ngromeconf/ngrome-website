import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueComponent } from './venue.component';

describe('VenueComponent', () => {
  let component: VenueComponent;
  let fixture: ComponentFixture<VenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
