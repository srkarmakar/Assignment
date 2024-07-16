import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../model/user';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: User = {
    name: "",
    email: "",
    password: ""
  };
  constructor(public toastrService: ToastrService,
    private router: Router,
  ) { }
  login() {
    const localUser = localStorage.getItem('users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((user: User) => user.email === this.user.email && user.password === this.user.password);
      if (isUserPresent != undefined) {
        this.toastrService.success('Logged In Succesfully', 'Success');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/products');
      } else {
        this.toastrService.error('No User Found!', 'Not Found')
      }
    }
  }
}

