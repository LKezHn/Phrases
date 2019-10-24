import { TestBed } from '@angular/core/testing';

import { PhraseServiceService } from './phrase-service.service';

describe('PhraseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhraseServiceService = TestBed.get(PhraseServiceService);
    expect(service).toBeTruthy();
  });
});
