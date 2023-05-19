import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzChallangeComponent } from './pages/quizz-challange/quizz-challange.component';
import { QuizzManagementComponent } from './pages/quizz-management/quizz-management.component';


const routes: Routes = [
  { path:'' , component:HomeComponent},
  { path:'quizz' , component:QuizzManagementComponent},
  { path: 'quizz/:id', component: QuizzChallangeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
