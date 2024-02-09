import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginHomeGuard } from './login-home.guard';

describe('loginHomeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginHomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
