import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com01Component } from './com01.component';

describe('Com01Component', () => {
  let component: Com01Component;
  let fixture: ComponentFixture<Com01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Com01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Com01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
