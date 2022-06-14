import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';

interface Car {
  year: number;
  color: string;
  running: boolean;
  make: {
    name: string;
    dateCreated: number;
  }
}

//
const observable = new Observable<Car>(observer =>{
   observer.next({
    year: 2000,
    color: "red",
    running: true,
    make: {
      name: "Chevy",
      dateCreated: 1950
    }
   });
 }).pipe(
   pluck('make', 'name')
 )


 observable.subscribe(value =>{
   console.log(value);
 })
 //

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
