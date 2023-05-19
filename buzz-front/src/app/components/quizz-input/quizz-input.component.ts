import { Component, Input, OnInit } from '@angular/core';
import { Alternativa } from 'src/app/Model/Alternativa';
import { QuizzInputPageModel } from 'src/app/Model/pageModel/QuizzInputPageModel';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz-input',
  templateUrl: './quizz-input.component.html',
  styleUrls: ['./quizz-input.component.css']
})
export class QuizzInputComponent implements OnInit {

  @Input() quizz:QuizzInputPageModel = {Id:0,title:'',description:'',isOpen:false, questions:[]}
  @Input() addBtn:{Add:boolean} = {Add:false};
  msg : string = '';
  showMsg:boolean = false;
  loading:boolean = false;

  constructor(private quizzService: QuizzService){}

  ngOnInit(): void {
    
  }

  AddQuestion():void{
    this.quizz.questions.push({id:0, questionDescription:'', alternatives:[]});
  }

  Save():void{
    this.validaQuizzInput(this.quizz);
    if(this.msg !== ''){
      this.openPopup();
      console.log(this.quizz);
      return;
    }
    else{
      this.openLoad();
      const { isOpen, ...quizzData } = this.quizz;
      if(quizzData.Id == 0){
        this.quizzService.postQuizz(quizzData).subscribe({
          next: response => {
            console.log(response);
            this.closeLoad();
          },
          error: err => {
            console.log(err);
            this.closeLoad()
          }
        });
      }
      else{
        this.quizzService.putQuizz(quizzData).subscribe(
          {
            next: response => {
              console.log(response);
              this.closeLoad();
            },
            error: err => {
              console.log(err);
              this.closeLoad();
            }
          }
        )
      }
      this.addBtn.Add = false;
    }
  }

  openLoad(){
    this.loading = true;
    document.body.classList.add('popup-active');
  }

  closeLoad(){
    this.loading = false;
    document.body.classList.remove('popup-active');
  }
  openPopup(){
    this.showMsg = true;
    document.body.classList.add('popup-active');
  }

  closePopup(){
    this.showMsg = false;
    document.body.classList.remove('popup-active');
  }

  validaQuizzInput(QuizzInput : QuizzInputPageModel) : void{
    this.msg = '';
    if(QuizzInput.title.trim().length < 5){
      this.msg += 'O título deve ter no mínimo 5 letras.\n';
    }
    if(QuizzInput.description.trim().length < 8){
      this.msg += 'A descrição do quizz deve ter no mínimo 8 letras.\n';
    }
    if(QuizzInput.questions.length < 4){
      this.msg += 'O quizz deve ter no mínimo 4 questões.\n';
    }
    else{

      let existeAlternativaSemMarcar = false;
      let existeQuestaoComMenosAlternativas = false;
      this.quizz.questions.forEach((questao) => {
        let temMarcado = (element:Alternativa, index:number, arr : Alternativa[]) => {
          return element.isCorrect === true;
        };
        if(questao.alternatives.some(temMarcado)===false){
          existeAlternativaSemMarcar = true;
        }
        if(questao.alternatives.length < 2){
          existeQuestaoComMenosAlternativas = true;
        }
      });
      if(existeQuestaoComMenosAlternativas as boolean === true){
        this.msg += 'Cada questão deve possuir ao menos duas alternativas.\n';
      }
      if( existeAlternativaSemMarcar as boolean === true){
        this.msg += 'Cada questão deve ter marcado qual é a alternativa correta.\n';
      }

    }

  }

}
