import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
constructor(private dataServ:DataService){


}
// ngOnInit():void{
//   console.log(this.dataServ.getPosts());
// }

}
