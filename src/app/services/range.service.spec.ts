import { TestBed, inject } from '@angular/core/testing';

import { ShellRangeService } from './range.service';

describe('KitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShellRangeService]
    });
  });

  it('should be created', inject([ShellRangeService], (service: ShellRangeService) => {
    expect(service).toBeTruthy();
  }));
});
