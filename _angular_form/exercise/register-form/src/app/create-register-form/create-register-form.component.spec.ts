import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterFormComponent } from './create-register-form.component';

describe('CreateRegisterFormComponent', () => {
  let component: CreateRegisterFormComponent;
  let fixture: ComponentFixture<CreateRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
