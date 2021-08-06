import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  // @ts-ignore
  onSubmit(id: any) {
    console.log(id);
    this.userService.getUserById(id).subscribe(data => {
        console.log(data);
        this.user = data;
        console.log(this.user);
        this.router.navigate(['search-user', id]);
      }
      // @ts-ignore
      // tslint:disable-next-line:no-shadowed-variable
      , error => console.log(error));
  }
}
