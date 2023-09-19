import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatinumComponent } from './platinum.component';

describe('PlatinumComponent', () => {
  let component: PlatinumComponent;
  let fixture: ComponentFixture<PlatinumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatinumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
