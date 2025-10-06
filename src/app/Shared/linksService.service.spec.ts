/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LinksServiceService } from './linksService.service';

describe('Service: LinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinksServiceService]
    });
  });

  it('should ...', inject([LinksServiceService], (service: LinksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
