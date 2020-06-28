import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenNumberComponent } from './even-number.component';

describe('EvenNumberComponent', () => {
  let component: EvenNumberComponent;
  let fixture: ComponentFixture<EvenNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
