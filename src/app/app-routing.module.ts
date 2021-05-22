import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  { path: '', component: BuscadorComponent, pathMatch: 'full' },
  { path: 'sobreNosotros', component: HomeComponent, pathMatch: 'full' },
  // { path: 'analisis', component: SentimentComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
