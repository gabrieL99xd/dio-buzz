import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Quizz } from '../Model/Quizz';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7090/api/Quizz';

  postQuizz(quizz: Quizz): Observable<any> {
    return this.http.post(this.apiUrl, quizz);
  }

  getQuizz(id: number): Observable<Quizz> {
    return this.http.get<Quizz>(this.apiUrl + `/${id}`).pipe(
      map((response: any) => {
        const quizz: Quizz = {
          Id: response.id,
          title: response.title,
          description: response.description,
          questions: response.questions
        };
        return quizz;
      })
    );
  }

  getAllQuizz(): Observable<Quizz[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        return response.map((obj: any) => {
          const quizz: Quizz = {
            Id : obj.id,
            title:obj.title,
            description : obj.description,
            questions : obj.questions
          };
          return quizz;
        });
      })
    );
  }

  putQuizz(quizz : Quizz): Observable<HttpResponse<any>>{
    return this.http.put(this.apiUrl+`/${quizz.Id}`,quizz , { observe: 'response' });
  }

  deleteQuizz(id:number):Observable<HttpResponse<any>>{
    return this.http.delete(this.apiUrl+`/${id}`,{ observe: 'response' });
  }
}
