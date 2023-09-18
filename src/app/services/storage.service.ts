import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  faves: Post[] = [];

  constructor() {
    if (localStorage.getItem('faves')) {
      //! il punto esclamativo vuol dire che ti arriverà sicuramente il dato
      this.faves = JSON.parse(localStorage.getItem('faves')!);
    }
  }
  savePost(post: Post) {
    this.faves.push(post);
    console.log(this.faves);

    
    localStorage.setItem('faves', JSON.stringify(this.faves));
  }

  removePost(post: Post) {
    this.faves = this.faves.filter((p) => p.id !== post.id);
    console.log(this.faves);
    localStorage.setItem('faves', JSON.stringify(this.faves));
  }

  toggleFaves(post: Post) {
    if (this.isFave(post)) {
      this.removePost(post);
    }
    {
      this.savePost(post);
    }
  }

  isFave(post: Post): boolean {
    return this.faves.some((p) => p.id === post.id);
  }
}
