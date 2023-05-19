import { Component, OnInit } from '@angular/core';
import { QuizzInputPageModel } from 'src/app/Model/pageModel/QuizzInputPageModel';
import { Questao } from 'src/app/Model/Questao'
import { Quizz } from 'src/app/Model/Quizz';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz-management',
  templateUrl: './quizz-management.component.html',
  styleUrls: ['./quizz-management.component.css'],
})


export class QuizzManagementComponent implements OnInit{

  quizzList:QuizzInputPageModel[] = [];
  quizzOpen : QuizzInputPageModel = {Id:0,title:'',description:'',isOpen:true, questions:[]};
  addBtn : {Add:boolean} = {Add:false};

  constructor(private quizzService:QuizzService){}

  ngOnInit(): void {
    this.quizzService.getAllQuizz().subscribe({
      next: (quizzList: Quizz[]) => {
        this.quizzList = quizzList.map((quizz : Quizz) => {
          const quizzPageModel : QuizzInputPageModel = {
            ...quizz,
            isOpen : false
          };
          return quizzPageModel;
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  AddQuizz():void{
    if(this.addBtn.Add === true)
      return;
    this.quizzList.unshift({Id:0,title:'',description:'',isOpen:true,questions:[]});
    this.addBtn.Add = true;
  }

  removeQuizz(index:number):void{
    if(index < this.quizzList.length){
      if(this.addBtn.Add === false){
        this.quizzService.deleteQuizz(this.quizzList[index].Id).subscribe({
          next: (response) => {
            this.quizzList.splice(index,1);
          },
          error: err =>{
            console.log(err);
          }
        });
      }
      if(this.addBtn.Add === true){
        this.quizzList.splice(index,1);
        this.addBtn.Add = false;
      }
    }
  }

  openOrHide(quizz:QuizzInputPageModel):void{
    if(this.addBtn.Add === true)
    return;
    const naoExisteAlgumAberto = !this.quizzOpen.title && !this.quizzOpen.title && typeof this.quizzOpen.isOpen === 'undefined'
    const MesmoQuizzAberto = this.quizzOpen === quizz && this.quizzOpen.isOpen === true;
    if (naoExisteAlgumAberto) {
      this.quizzOpen = quizz;
    }
    else if(MesmoQuizzAberto){
      this.quizzOpen.isOpen = false;
      return;
    }
    else{
      this.quizzOpen.isOpen = false;
    }
    quizz.isOpen = !quizz.isOpen;
    this.quizzOpen = quizz;
  }
}
