import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MainLinks } from './main-links';
import { LinksService } from '../../Shared';

describe('MainLinks', () => {
  let component: MainLinks;
  let fixture: ComponentFixture<MainLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLinks],
      providers: [LinksService, provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
