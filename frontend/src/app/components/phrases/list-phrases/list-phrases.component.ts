import { Component, OnInit } from '@angular/core';
import { PhraseServiceService } from '../../../services/phrase-service.service';
import { Phrase } from '../../../models/phrase'

@Component({
  selector: 'app-list-phrases',
  templateUrl: './list-phrases.component.html',
  styleUrls: ['./list-phrases.component.css']
})
export class ListPhrasesComponent implements OnInit {
  phrases: Phrase[];

  constructor(private phraseService: PhraseServiceService) { }


  ngOnInit() {
    this.getPhrases();
  }

  private getPhrases() {
    this.phrases = [];
    this.phraseService.getPhrases()
      .subscribe((phrases: Phrase[]) => {
        this.phrases = phrases;
    });
  }

}
