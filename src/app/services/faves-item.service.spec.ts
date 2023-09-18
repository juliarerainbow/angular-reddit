import { TestBed } from '@angular/core/testing';

import { FavesItemService } from './faves-item.service';

describe('FavesItemService', () => {
  let service: FavesItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavesItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
