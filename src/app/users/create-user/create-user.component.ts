import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response: ResponseCreate

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  save() {
    this.userService.createUser(this.request).subscribe(resposta => {
      this.response = resposta;
    });
  }
}
