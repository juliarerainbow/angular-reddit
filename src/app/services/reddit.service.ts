import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  constructor(private http: HttpClient) {}

  //httpClient converte direttamente in json
  //tra le parentesi quadre mi torna direttamente il tipo dell'oggetto che desidero
  getRedditPosts() {

    // // subscribe è come il them
    // this.http
    //   .get<any>('https://www.reddit.com/r/beatles/new.json')
    //   .subscribe((data) => {
    //     console.log(data);
    //   });  


      // pipe => tutte le funzioni di manipolazione del dato
      //tap è l'equivalente del console log e non manipola il dato
    return this.http.get<Post>('https://www.reddit.com/r/beatles/new.json').pipe(
      // tap(redditObj => console.log('oggetto completo',redditObj)), 
      map((redditObj:any) => redditObj.data),
      // tap(redditData=> console.log('oggetto data',redditData)),
      map(redditData => redditData.children),
      // tap(redditChildren=>console.log('oggetto children',redditChildren)),
      map(redditChildren => redditChildren.map((child:any) => child.data))
      );
  }
}
