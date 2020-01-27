import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Phrase } from '../models/phrase';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseServiceService {
  private apiUrl =  "http://localhost:8000/api/v1/phrase/phrases";

  constructor(private http: HttpClient) { }

  public getPhrases(): Observable<Phrase[]>{
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let phrases: Phrase[] = [];
          res.forEach(object => {
            let phrase = new Phrase(object.id, object.user, object.title, object.description,object.date,object.category);
            phrases.push(phrase)
          });
          return phrases;
        })
      );
  }

  public getOnePhrase(id: number){
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
  }
