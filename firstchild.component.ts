import { Component , Output ,EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent {
@Output() Usertrans : EventEmitter<User> = new EventEmitter<User> ();
imgurl:'https://images.app.goo.gl/bkaxyYFbQEFdmLZx8' ;
users : User[] = [
  {name:"alaa",
    city:"alex",
    id:1,
    photo: `${this.imgurl}`,

  },
  {name:"alaa",
  city:"alex",
  id:2,
  photo: `${this.imgurl}`,

},
{name:"alaa",
city:"alex",
id:3,
photo: `${this.imgurl}`,

},
]

adduser(par:any){
  this.users.push({
    name:par,
  city:"alex",
  id:2,
  })
}

delet(index:number){
  this.users.splice(index,1);


}

usertrans (pat:User){
  this.Usertrans.emit(pat);
}

};

