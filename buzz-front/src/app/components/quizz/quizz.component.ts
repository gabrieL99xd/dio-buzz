import { Component, Input, OnInit } from '@angular/core';
import { AlternativaChallange, QuestaoChallange, QuizzChallangePageModel } from 'src/app/Model/pageModel/QuizzChallangePageModel';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit{

  @Input() Quizz : QuizzChallangePageModel = { id:0, title:'' ,description:'' , questions : [] };

  constructor(){ }

  ngOnInit(): void {

  }

  alternativaEscolhida(Questao : QuestaoChallange,Alternativa : AlternativaChallange):void{
    Questao.clicked = true;
    Alternativa.isSelected = true;
  }
}
