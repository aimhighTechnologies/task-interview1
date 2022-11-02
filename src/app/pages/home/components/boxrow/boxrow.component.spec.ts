import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxrowComponent } from './boxrow.component';

describe('BoxrowComponent', () => {
  let component: BoxrowComponent;
  let fixture: ComponentFixture<BoxrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
