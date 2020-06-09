import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/interface/interface';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit, OnDestroy {
  currentUser: User;
  subcribe: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  // Get current user
  ngOnInit() {
    this.subcribe = this.authService.currentUser.subscribe(ele => {
      this.currentUser = ele;
    });
  }

  // Log out and remove all data
  logOut() {
    this.authService.deleteCurrentUser();
    this.authService.currentUser.next(null);
    this.router.navigateByUrl('/sign-in');
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
