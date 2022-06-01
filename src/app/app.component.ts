import { Component, Input } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private wikipediaService: WikipediaService
  ){}

  onTerm(term: any){
    this.wikipediaService.search(term).subscribe((res)=>{
      console.log(res)
    });
  }

  //Section 13: Handling Data and HTTP Requests
  // SearchBar + PageList components + wikipedia service
  // Child to Parent Communication

  //https://en.wikipedia.org/w/api.php?
            // action=query&
            // format=json&
            // list=search&
            // utf8=1&
            //srsearch=space

            // 180. Making HTTP Requests
            // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
            // 181. Seeing the Request's Response
            //
}
