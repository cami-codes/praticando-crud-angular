import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id!: any;
  user: User

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserId(this.id).subscribe(resposta => {
      this.user = resposta.data;

    });
  }

  delete() {
     this.userService.deleteUser(this.id).subscribe(resposta => {
      alert('Removido com sucesso!')
      this.router.navigate(['/users'])
     });
  }

  cancel() {
    this.router.navigate(['/users'])
  }

}
