import { TestBed } from '@angular/core/testing';

import { LanguageSwitch } from './language-switch';

describe('LanguageSwitch', () => {
  let service: LanguageSwitch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageSwitch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
