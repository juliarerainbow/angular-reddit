import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  // getPosts():Promise< void | Post[]>{
  //   return fetch('// https://www.reddit.com/r/beatles.json').then(resp=>resp.json()).then()
  // }


}
