import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKitComponent } from './edit-kit.component';

describe('EditKitComponent', () => {
  let component: EditKitComponent;
  let fixture: ComponentFixture<EditKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
