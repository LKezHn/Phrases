import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListPhrasesComponent } from './components/list-phrases/list-phrases.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPhrasesComponent,
    ListUsersComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,    
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
