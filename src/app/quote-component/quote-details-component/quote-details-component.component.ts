import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-details-component',
  templateUrl: './quote-details-component.component.html',
  styleUrls: ['./quote-details-component.component.scss']
})
export class QuoteDetailsComponentComponent implements OnInit {

  @Input() quoteDC!:Quote;

  @Output() del = new EventEmitter<boolean>();

  quoteDelete(clear:boolean) {
    this.del.emit(clear);
  }

  @Output() newLike = new EventEmitter<boolean>();
  @Output() newDislike = new EventEmitter<boolean>();

  addLike(like:boolean) {
    this.newLike.emit(like)
  }

  addDislike(dislike:boolean) {
    this.newDislike.emit(dislike)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
