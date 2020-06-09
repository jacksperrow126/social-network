import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  show = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(ele => {
      this.currentUser = ele;
    });
  }

  // Log out and remove all data
  logOut() {
    this.authService.deleteCurrentUser();
    this.authService.currentUser.next(null);
    this.router.navigateByUrl('/sign-in');
  }

  // Navbar in mobile device
  showNav() {
    if (this.show) {
      document.querySelector('.toggle').classList.remove('show');
      document.querySelector('.toggle').classList.add('hide');
      this.show = false;
    } else {
      document.querySelector('.toggle').classList.remove('hide');
      document.querySelector('.toggle').classList.add('show');
      this.show = true;
    }
  }

  // Hide navbar when user click an option
  hide() {
    document.querySelector('.toggle').classList.remove('show');
    document.querySelector('.toggle').classList.add('hide');
    this.show = false;
  }
}
