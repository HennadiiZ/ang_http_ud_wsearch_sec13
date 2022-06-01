import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  getSearchValue = '';

  onTerm(term: any){
    this.getSearchValue = term
      console.log("this is ", term)
      console.log("this is +++", this.getSearchValue)
  }

  //Section 13: Handling Data and HTTP Requests
  // SearchBar + PageList components + wikipedia service
  // Child to Parent Communication
}
