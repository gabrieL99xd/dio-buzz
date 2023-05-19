import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesPaginatorComponent } from './quizzes-paginator.component';

describe('QuizzesPaginatorComponent', () => {
  let component: QuizzesPaginatorComponent;
  let fixture: ComponentFixture<QuizzesPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzesPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
