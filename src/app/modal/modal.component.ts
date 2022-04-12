import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  newQuote = new Quote("", "", "")

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(f: NgForm) {
    if (f.valid) {
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote('', '', '');
    } else {
      alert('')
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}


