import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPhrasesComponent } from './components/phrases/list-phrases/list-phrases.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { PhrasesDetailsComponent } from './components/phrases/phrases-details/phrases-details.component';

const routes: Routes = [
  { path: 'phrases', component: ListPhrasesComponent },
  { path: 'phrases/:id', component: PhrasesDetailsComponent},
  { path: 'users', component: ListUsersComponent},
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}