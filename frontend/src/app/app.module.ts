import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListPhrasesComponent } from './components/list-phrases/list-phrases.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPhrasesComponent,
    ListUsersComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,    
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
