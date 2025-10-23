import { TestBed } from '@angular/core/testing';

import { ContactExpressJSService } from './contact-express-js-service';

describe('ContactExpressJSService', () => {
  let service: ContactExpressJSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactExpressJSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
