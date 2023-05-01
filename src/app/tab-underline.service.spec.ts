import { TestBed } from '@angular/core/testing';

import { TabUnderlineService } from './tab-underline.service';

describe('TabUnderlineService', () => {
  let service: TabUnderlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabUnderlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
