import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'
import { QuizzComponent } from './components/quizz/quizz.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuizzChallangeComponent } from './pages/quizz-challange/quizz-challange.component';
import { QuizzesPaginatorComponent } from './components/quizzes-paginator/quizzes-paginator.component';
import { QuizzManagementComponent } from './pages/quizz-management/quizz-management.component';
import { QuizzInputComponent } from './components/quizz-input/quizz-input.component';
import { QuestionInputComponent } from './components/question-input/question-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    MenuComponent,
    QuizzChallangeComponent,
    QuizzesPaginatorComponent,
    QuizzManagementComponent,
    QuizzInputComponent,
    QuestionInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
