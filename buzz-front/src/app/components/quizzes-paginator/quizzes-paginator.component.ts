import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/Model/Quizz';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizzes-paginator',
  templateUrl: './quizzes-paginator.component.html',
  styleUrls: ['./quizzes-paginator.component.css'],
})

export class QuizzesPaginatorComponent implements OnInit{

  paginatedList: Quizz[] = [];
  itemPerPage = 5;
  currentPage = 1;
  totalPages = 1;
  maxButtons = 5;
  constructor(private quizzService: QuizzService){ }

  get visiblePages(): number[] {
    if (this.totalPages <= this.maxButtons) {
      return this.pages;
    } else if (this.currentPage <= Math.ceil(this.maxButtons / 2)) {
      return this.pages.slice(0, this.maxButtons);
    } else if (this.currentPage >= this.totalPages - Math.floor(this.maxButtons / 2)) {
      return this.pages.slice(this.totalPages - this.maxButtons, this.totalPages);
    } else {
      const middleIndex = Math.floor(this.maxButtons / 2);
      const start = this.currentPage - middleIndex;
      const end = this.currentPage + middleIndex;
      return this.pages.slice(start - 1, end);
    }
  }


  get pages(): number[] {
    const numPages = Math.ceil(this.paginatedList.length / this.itemPerPage);
    const pagesArray = [];
    for (let i = 1; i <= numPages; i++) {
      pagesArray.push(i);
    }
    this.totalPages = pagesArray.length;
    return pagesArray;
  }


  ngOnInit(): void {

    this.quizzService.getAllQuizz().subscribe({
      next: (quizzList: Quizz[]) => {
        this.paginatedList = quizzList;
        console.log(quizzList);
        let numPages = Math.ceil(this.paginatedList.length / this.itemPerPage);
        for (var i = 1; i <= numPages; i++) {
          this.pages.push(i);
        }
        this.totalPages = this.pages.length;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  firstPage() {
    this.currentPage = 1;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }
  
  lastPage() {
    this.currentPage = this.pages.length;
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

}
