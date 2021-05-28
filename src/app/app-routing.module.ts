import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AdminComponent } from './components/admin/admin.component';
import { TablasComponent } from './components/tablas/tablas.component';

const routes: Routes = [
  { path: '', component: BuscadorComponent, pathMatch: 'full' },
  { path: 'sobreNosotros', component: HomeComponent, pathMatch: 'full' },
  // { path: 'analisis', component: SentimentComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, pathMatch: 'full' },
  { path: 'tablas', component: TablasComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
