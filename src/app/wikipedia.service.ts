import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const observable = new Observable<number>(observer =>{
//   observer.next(1);
// });
// observable.subscribe(value =>{
//   console.log(value);
// })

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  url = "https://en.wikipedia.org/w/api.php"
  paramsExample = "?action=query&format=json&list=search&utf8=1&srsearch=space"

  constructor(
    private http: HttpClient
  ){}

  search(term: string){
      return this.http.get(this.url, {
        params: {
            action: 'query',
            format: 'json',
            list: 'search',
            utf8: '1',
            srsearch: term,
            origin: '*'
        }
      });
  }
}
