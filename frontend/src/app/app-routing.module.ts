import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPhrasesComponent } from './components/list-phrases/list-phrases.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'phrases', component: ListPhrasesComponent },
  { path: 'users', component: ListUsersComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}