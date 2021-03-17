import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { ExamenComponent } from './examen/examen.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path: 'analisis', component: SentimentComponent, pathMatch:"full"},
  { path: 'examen', component: ExamenComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }