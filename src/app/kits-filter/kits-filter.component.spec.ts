import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitsFilterComponent } from './kits-filter.component';

describe('KitsFilterComponent', () => {
  let component: KitsFilterComponent;
  let fixture: ComponentFixture<KitsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
