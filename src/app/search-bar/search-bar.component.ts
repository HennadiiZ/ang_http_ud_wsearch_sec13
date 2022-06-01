import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();    // Child to Parent Communication
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: any): void {
    this.term = event.value;
      // console.log(this.term);
  }

  onFormSubmit(event: any){
    event.preventDefault();
    // console.log(this.term);
    this.submitted.emit(this.term);
  }

}
