import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() postData?: Post;
  @Input() isFave:boolean = false;
  @Input() bColor:string = 'crimson';
  constructor(public storage: StorageService){

  }

}
