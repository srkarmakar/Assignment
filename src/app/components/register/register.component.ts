import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../model/user';
import { Route, Router } from '@angular/router';
import { routes } from '../../app.routes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: User = {
    name: "",
    email: "",
    password: ""
  };
  constructor(public toastrService: ToastrService,
    private router: Router
  ) { }

  register() {
    const localUser = localStorage.getItem('users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.user);
      localStorage.setItem('users', JSON.stringify(users));
      this.toastrService.success('User Added Successfully!', 'Success');
      this.router.navigateByUrl('');
    } else {
      const users: User[] = [];
      users.push(this.user);
      localStorage.setItem('users', JSON.stringify(users))
      this.toastrService.success('User Added Successfully!', 'Success');
      this.router.navigateByUrl('');
    }
  }
}
