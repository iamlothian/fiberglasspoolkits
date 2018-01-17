import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellListFilterComponent } from './shell-list-filter.component';

describe('ShellListFilterComponent', () => {
  let component: ShellListFilterComponent;
  let fixture: ComponentFixture<ShellListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
