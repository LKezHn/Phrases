import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListPhrasesComponent } from './components/phrases/list-phrases/list-phrases.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PhrasesDetailsComponent } from './components/phrases/phrases-details/phrases-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPhrasesComponent,
    ListUsersComponent,
    HeaderComponent,
    LoginComponent,
    PhrasesDetailsComponent
  ],
  imports: [
    HttpClientModule,    
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
