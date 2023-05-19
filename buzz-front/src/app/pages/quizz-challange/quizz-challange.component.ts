import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quizz } from 'src/app/Model/Quizz';
import { AlternativaChallange, QuestaoChallange , QuizzChallangePageModel } from 'src/app/Model/pageModel/QuizzChallangePageModel';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz-challange',
  templateUrl: './quizz-challange.component.html',
  styleUrls: ['./quizz-challange.component.css']
})
export class QuizzChallangeComponent {
  Quizz : QuizzChallangePageModel = { id:0, title:'' ,description:'' , questions : [] };

  constructor(private quizzService: QuizzService, private route: ActivatedRoute){ }
  
  ngOnInit(): void {
    const idQuizz = this.route.snapshot.paramMap.get('id');
    if(idQuizz !== null){
      this.quizzService.getQuizz(Number.parseInt(idQuizz)).subscribe({
        next: response  => {
          this.Quizz = this.converterQuizzParaChallange(response);
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

  converterQuizzParaChallange(quizz: Quizz): QuizzChallangePageModel {
    const quizzChallange: QuizzChallangePageModel = {
      id: quizz.Id,
      title: quizz.title,
      description: quizz.description,
      questions: quizz.questions.map((question) => {
        const questionChallange : QuestaoChallange = {
          id: question.id,
          questionDescription : question.questionDescription,
          clicked : false,
          alternatives :question.alternatives.map((alternativa) => {
            const alternativaCh : AlternativaChallange = {
              id : alternativa.Id,
              alternativeDescription : alternativa.alternativeDescription,
              isCorrect : alternativa.isCorrect,
              isSelected : false
            };
            return alternativaCh;
          })
        }
        return questionChallange;
      })
    };
  
    return quizzChallange;
  }

}
