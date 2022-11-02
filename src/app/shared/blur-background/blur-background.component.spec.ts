import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurBackgroundComponent } from './blur-background.component';

describe('BackdropComponent', () => {
  let component: BlurBackgroundComponent;
  let fixture: ComponentFixture<BlurBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlurBackgroundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
