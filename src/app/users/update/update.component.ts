import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { RequestUpdate } from '../../model/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: any;
  request!: RequestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserId(this.id).subscribe(resposta => {
      this.request = {
        name: `${resposta.data.first_name} ${resposta.data.last_name}`,
        job: ''
      }

    });
  }

  atualizar() {
    this.userService.updateUser(this.id, this.request).subscribe(resposta => {
      alert(`Atualizar: ${resposta.updatedAt}, Nome: ${resposta.name}, job: ${resposta.job}`);
    });
  }
}
