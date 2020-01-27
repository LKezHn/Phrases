import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesDetailsComponent } from './phrases-details.component';

describe('PhrasesDetailsComponent', () => {
  let component: PhrasesDetailsComponent;
  let fixture: ComponentFixture<PhrasesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
