import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-network-project';
  token: string;
  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.checkLocalStorage()) {
      this.token = localStorage.getItem('currentUserToken');
      this.authService.getUser(this.token).subscribe(ele => {
        this.authService.currentUser.next(ele);
      });
    }
  }
}
