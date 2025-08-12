import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLinks } from './main-links';

describe('MainLinks', () => {
  let component: MainLinks;
  let fixture: ComponentFixture<MainLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
