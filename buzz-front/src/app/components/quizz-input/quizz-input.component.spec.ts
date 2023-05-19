import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzInputComponent } from './quizz-input.component';

describe('QuizzInputComponent', () => {
  let component: QuizzInputComponent;
  let fixture: ComponentFixture<QuizzInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
