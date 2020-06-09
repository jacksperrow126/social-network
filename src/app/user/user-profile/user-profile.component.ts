import { Subscription } from 'rxjs';
import { User } from './../../interface/interface';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: string;
  isLoading: boolean;
  currentUser: User;
  subcribeRouter: Subscription;
  subcribeSubject: Subscription;

  constructor(
    private actived: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {}

  // Get param on router and save to user service, get current user
  ngOnInit(): void {
    this.isLoading = true;
    this.subcribeRouter = this.actived.params.subscribe(param => {
      this.user = param.username;
      this.userService.userAfterchange.next(this.user);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
    this.subcribeSubject = this.authService.currentUser.subscribe(ele => {
      this.currentUser = ele;
    });
  }

  ngOnDestroy() {
    this.subcribeRouter.unsubscribe();
    this.subcribeSubject.unsubscribe();
  }
}
