import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzChallangeComponent } from './quizz-challange.component';

describe('QuizzChallangeComponent', () => {
  let component: QuizzChallangeComponent;
  let fixture: ComponentFixture<QuizzChallangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzChallangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
