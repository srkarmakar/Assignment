import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="col-12 div-design py-3 my-2">
  <a class="col-md-10 label text-violet-800 font-bold p-3" routerLink=''>Product Management</a>
  <div class="col-md-2 d-flex justify-content-end">
  <a class="col-md-6 text-primary d-flex align-items-center" routerLink="/profile">{{loggedUser?.name}}</a>
  <button class="btn btn-sm btn-secondary" (click)="logOut()">LogOut</button>
  </div>  
  </div>
  `,
  styles: `
  .label{
    font-size: 40px;
    font-family: "Lucida Console", "Courier New", monospace;
    
  }
  .div-design {
    display: flex;
    border-bottom: 3px solid red;
    border-style: double;
  }`
})
export class HeaderComponent {
  loggedUser!: User;
  constructor(private router: Router,) {
    const localUser = localStorage.getItem('loggedUser');
    if (localUser != null) {
      this.loggedUser = JSON.parse(localUser)
    }
  }

  logOut(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('');
  }

}
