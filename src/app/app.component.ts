import { Component, Input } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @Input() 
  pages!:any;

  constructor(
    private wikipediaService: WikipediaService
  ){}

  onTerm(term: string){
    this.wikipediaService.search(term).subscribe((res: any) =>{
      console.log(res)
      this.pages = res.query.search;
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
            // 182. More Parent to Child Communication
            // 183. Building the Table

  // ====== // Section 14: App Security in Angular
            // 184. Escaping HTML Characters
            // 185. XSS Attacks
            // 186. More on XSS Attacks

            // 187. Adding Title Links
            // 188. Another CSS Gotcha
}
