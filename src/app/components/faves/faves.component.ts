import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.scss']
})
export class FavesComponent implements OnInit {
  
  favesArray:Post[] = [];

  constructor(public storage:StorageService){ }

  ngOnInit(): void {
      this.storage.favesSubject.subscribe(arrofFaves => {
          this.favesArray = arrofFaves;
          this.favesArray.sort((f1,f2)=> f2.created - f1.created)
      })
  }

}
