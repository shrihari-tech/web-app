import { TestBed } from '@angular/core/testing';

import { LoginGuardServiceService } from './login-guard-service.service';

describe('LoginGuardServiceService', () => {
  let service: LoginGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
