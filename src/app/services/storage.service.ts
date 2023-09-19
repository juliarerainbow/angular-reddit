import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  //tipi di variabili osservabili
  //subject = è vuota fino a quando non gli viene assegnato un valore
  //BehaviorSubject = 
  //ReplaySubject = ricorda tutti i valori precedenti che ha avuto. 

  //In questo modo rendo la mia variabile osservabile. Avvisa quando viene cambiato e ogni volta che cambia può fare delle cose
  //alternativa faveSubject:BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]); => 

  favesSubject = new BehaviorSubject<Post[]>([]); 

  //old faves: Post[] = [];

  constructor() {
    if (localStorage.getItem('faves')) {
      //! il punto esclamativo vuol dire che ti arriverà sicuramente il dato
      //old this.faves = JSON.parse(localStorage.getItem('faves')!);

      //next permette alla variabile di prendere il valore successivo
      this.favesSubject.next(JSON.parse(localStorage.getItem('faves')!));
    }
  }
  savePost(post: Post) {
    post.isFave=true;
    //old this.faves.push(post);
    //old console.log(this.faves);
    const actualArray=this.favesSubject.value;
    actualArray.push(post);
    this.favesSubject.next(actualArray);

    // alternativa this.favesSubject.next([...this.favesSubject,post]);

    localStorage.setItem('faves', JSON.stringify(actualArray));
  }

  removePost(post: Post) {
    post.isFave=false;
    //old this.faves = this.faves.filter((p) => p.id !== post.id);
    //old console.log(this.faves);
    //old localStorage.setItem('faves', JSON.stringify(this.faves));
    
    const actualArray=this.favesSubject.value;
    const newArray = actualArray.filter((p) => p.id !== post.id);
    this.favesSubject.next(newArray);
    localStorage.setItem('faves', JSON.stringify(newArray));
  }

  toggleFaves(post: Post) {
    if (this.isFave(post)) {
      this.removePost(post);
    }else {
      this.savePost(post);
    }
  }

  isFave(post: Post): boolean {
    console.log('is fave', post);
    return this.favesSubject.value.some((p) => p.id === post.id);
  }
}
