import { Subscription } from 'rxjs';
import { Profile } from './../../interface/interface';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-user-cover',
  templateUrl: './user-cover.component.html',
  styleUrls: ['./user-cover.component.css']
})
export class UserCoverComponent implements OnInit, OnChanges, OnDestroy {
  @Input() username: string;
  userProfile: Profile;
  isMyAccount = false;
  myAccount: string;
  follow: boolean;
  subcribe: Subscription;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  // Get current user
  ngOnInit(): void {
    this.userService.userAfterchange.subscribe((ele: string) => {
      this.username = ele;
      this.userService.getProfile(this.username).subscribe(data => {
        this.follow = data.profile.following;
        this.userProfile = data;
        if (this.userProfile.profile.username === this.myAccount) {
          this.isMyAccount = true;
        } else {
          this.isMyAccount = false;
        }
      });
    });
    this.subcribe = this.authService.currentUser.subscribe(data => {
      this.myAccount = data?.user.username;
    });
  }

  // Update user data when user change
  ngOnChanges() {
    this.userService.getProfile(this.username).subscribe(data => {
      this.follow = data.profile.following;
      this.userProfile = data;
      if (this.userProfile.profile.username === this.myAccount) {
        this.isMyAccount = true;
      } else {
        this.isMyAccount = false;
      }
    });
  }

  // Open edit profile
  openEditUser() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '60vw',
      height: '80vh'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.userService.getProfile(this.username).subscribe(data => {
        this.userProfile = data;
      });
    });
  }

  // Follow another user
  followUser() {
    this.userService.follow(this.username).subscribe(() => {
      this.follow = true;
    });
  }

  // Unfollow another user
  unFollowUser() {
    this.userService.unfollow(this.username).subscribe(() => {
      this.follow = false;
    });
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
