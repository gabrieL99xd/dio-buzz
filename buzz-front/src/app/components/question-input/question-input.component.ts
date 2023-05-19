import { Component, Input } from '@angular/core';
import { Questao } from 'src/app/Model/Questao';
import { QuizzInputPageModel } from 'src/app/Model/pageModel/QuizzInputPageModel';

@Component({
  selector: 'app-question-input',
  templateUrl: './question-input.component.html',
  styleUrls: ['./question-input.component.css']
})
export class QuestionInputComponent { 

  @Input() quizz:QuizzInputPageModel = {Id:0,title:'',description:'',isOpen:false, questions:[]}

  addAlternativa(questaoClicada : Questao){
    questaoClicada.alternatives.unshift({Id:0,alternativeDescription:'',isCorrect:false});
  }

  rmvAlternativa(Questao:Questao , index:number):void{
    if (index >= 0 && index < Questao.alternatives.length) {
      Questao.alternatives.splice(index, 1);
      console.log(this.quizz);
    }
  }

  rmvQuestao(Questao:Questao , i : number):void{
    if (i >= 0 && i < this.quizz.questions.length) {
      this.quizz.questions.splice(i, 1);
      console.log(this.quizz);
    }
  }

  selecionarAlternativa(questao: Questao, indexAlt: number): void {
    questao.alternatives.forEach((alternativa, index) => {
      alternativa.isCorrect = (index === indexAlt);
    });
  }

  
}


