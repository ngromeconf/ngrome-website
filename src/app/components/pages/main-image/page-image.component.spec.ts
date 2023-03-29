import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageComponent } from './page-image.component';

describe('PageImageComponent', () => {
  let component: PageImageComponent;
  let fixture: ComponentFixture<PageImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
