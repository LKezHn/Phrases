import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhraseServiceService } from 'src/app/services/phrase-service.service';
import { Phrase } from 'src/app/models/phrase';

@Component({
  selector: 'app-phrases-details',
  templateUrl: './phrases-details.component.html',
  styleUrls: ['./phrases-details.component.css']
})
export class PhrasesDetailsComponent implements OnInit {

  public id: string;
  public phraseDetail: {};

  constructor( private route: ActivatedRoute,
    private phraseService: PhraseServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getPhrase(this.id);
  }

  private getPhrase(id: any) {
    this.phraseService.getOnePhrase(id)
    .subscribe(
      res=>{
        console.log(res);
        this.phraseDetail = res;
    });
  }
}
