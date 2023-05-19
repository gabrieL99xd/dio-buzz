import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzManagementComponent } from './quizz-management.component';

describe('QuizzManagementComponent', () => {
  let component: QuizzManagementComponent;
  let fixture: ComponentFixture<QuizzManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
