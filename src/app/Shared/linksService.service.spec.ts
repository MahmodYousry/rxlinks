import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { LinksService } from './linksService.service';

describe('LinksService', () => {
  let service: LinksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinksService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(LinksService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load links from JSON', () => {
    const mockLinks = [{ title: 'Test', url: 'https://test.com', img: 'img.png', category: 'Test' }];
    service.getLinks().subscribe(links => {
      expect(links).toEqual(mockLinks);
    });
    const req = httpMock.expectOne('/links.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockLinks);
  });
});
