import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoldSponsorComponent } from './gold-sponsor.component';

describe('GoldComponent', () => {
  let component: GoldSponsorComponent;
  let fixture: ComponentFixture<GoldSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldSponsorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoldSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
