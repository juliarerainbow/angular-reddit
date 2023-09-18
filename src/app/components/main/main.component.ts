import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  posts:Post[]=[];

  constructor(private reddit:RedditService, public storage: StorageService){}

  ngOnInit():void{
    this.reddit.getRedditPosts().subscribe(childrenData => this.posts = childrenData);
  }
}
