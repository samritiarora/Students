import { TestBed } from '@angular/core/testing';

import { DocumentsRequiredService } from './documents-required.service';

describe('DocumentsRequiredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentsRequiredService = TestBed.get(DocumentsRequiredService);
    expect(service).toBeTruthy();
  });
});
