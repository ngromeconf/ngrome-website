import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareComponent } from './social-share.component';

describe('SocialShareComponent', () => {
  let component: SocialShareComponent;
  let fixture: ComponentFixture<SocialShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SocialShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
