import {
  beforeEachProviders,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { CccfixApp } from './cccfix.component';
// import { cccfixService } from './cccfix.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  // beforeEachProviders(() => [
  //   cccfixService,
  //   cccfixApp
  // ]);

  it('should have a url', inject([ CccfixApp ], (app) => {
    expect(app.url).toEqual('https://twitter.com/AngularClass');
  }));

});
