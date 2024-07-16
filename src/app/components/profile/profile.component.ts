import { Component } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  logedInUser!: User;

  constructor() {
    const localUser = localStorage.getItem('loggedUser');
    if (localUser != null) {
      this.logedInUser = JSON.parse(localUser)
    }
  }
}
