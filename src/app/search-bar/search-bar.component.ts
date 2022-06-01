import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: any): void {
    this.term = event.value;
      console.log(this.term);

  }

}
