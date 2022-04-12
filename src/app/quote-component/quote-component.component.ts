import { Quote } from '../quote';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.scss']
})
export class QuoteComponentComponent implements OnInit {

  arrayQuotes:Quote[] = [
    new Quote('You miss 100% of the shots you do not take.', 'Robert Gitonga', 'Wayne Gretzky'),
    new Quote('Always borrow money from a pessimist. He wont expect it back.', 'Kijana Jeuri', 'Oscar Wilde'),
    new Quote('If you cannot do great things,do small things in a great way.', 'Motivational Speaker', 'Napoleon Hill'),
    new Quote('It is never too late to be what you might have been.', 'Old Man', 'George Eliot')
    new Quote('An obstacle is often a stepping stone.', 'Robert Gitonga', 'William Prescott')
  ]

  deleteQuote(del:any,index:number) {
    if (del) {
      this.arrayQuotes.splice(index,1)
    }
  }

  addLike(newLike:any, index:number) {
    if (newLike) {
      this.arrayQuotes[index].likes += 1
    }
  }

  addDislike(newDislike:any, index:number) {
    if (newDislike) {
      this.arrayQuotes[index].dislikes += 1
    }
  }

  newQuote(quoteNew:any) {
    this.arrayQuotes.push(quoteNew)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
