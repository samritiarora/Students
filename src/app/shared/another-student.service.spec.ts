import { TestBed } from '@angular/core/testing';

import { AnotherStudentService } from './another-student.service';

describe('AnotherStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherStudentService = TestBed.get(AnotherStudentService);
    expect(service).toBeTruthy();
  });
});
