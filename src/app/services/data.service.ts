import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  // getPosts(): Promise<Post[]>{
  //   return fetch('https://www.reddit.com/r/beatles/new.json')
  //   .then(resp => resp.json())
  //   .then(redditObj => redditObj.data)
  //   .then(data => data.children)
  //   .then(children => children.map((c:any) => {
  //     const newPost:Post = {
  //       id: c.data.id,
  //       title: c.data.title,
  //       author: c.data.author,
  //       thumbnail: c.data.thumbnail,
  //       created: new Date(c.data.created * 1000),
  //       imageUrl: c.data.url,
  //     }
  //     return newPost;
  //   }))
  // }
}
