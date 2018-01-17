import { TestBed, inject } from '@angular/core/testing';

import { ShellListFilterService } from './shell-list-filter.service';

describe('ShellListFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShellListFilterService]
    });
  });

  it('should be created', inject([ShellListFilterService], (service: ShellListFilterService) => {
    expect(service).toBeTruthy();
  }));
});
