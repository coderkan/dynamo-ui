import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R2formComponent } from './r2form.component';

describe('R2formComponent', () => {
  let component: R2formComponent;
  let fixture: ComponentFixture<R2formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R2formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R2formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
