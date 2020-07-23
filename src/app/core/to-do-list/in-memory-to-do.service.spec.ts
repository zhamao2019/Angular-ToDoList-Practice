import { TestBed } from '@angular/core/testing';

import { InMemoryToDoService } from './in-memory-to-do.service';

describe('InMemoryToDoService', () => {
  let service: InMemoryToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
