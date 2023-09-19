import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilverSponsorComponent } from './silver-sponsor.component';

describe('SilverSponsorComponent', () => {
  let component: SilverSponsorComponent;
  let fixture: ComponentFixture<SilverSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilverSponsorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SilverSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
