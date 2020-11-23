import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSignUp } from './home-page.component';

describe('HomePageComponent', () => {
  let component: ClassSignUp;
  let fixture: ComponentFixture<ClassSignUp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSignUp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSignUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
