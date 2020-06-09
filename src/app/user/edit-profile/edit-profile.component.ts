import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  myProfile: any;
  isUpdate: boolean;
  subcribe: Subscription;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    private router: Router
  ) {}

  // Get current user
  ngOnInit(): void {
    this.subcribe = this.authService.currentUser.subscribe(data => {
      this.myProfile = data.user;
    });
  }

  // Update profile and save to service
  updateProfile(value: any) {
    this.isUpdate = true;
    this.userService.editProfileUser(value).subscribe(ele => {
      this.userService.userAfterchange.next(ele.user.username);
      this.router.navigate(['/user', ele.user.username]);
      this.dialogRef.close();
      this.isUpdate = false;
    });
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
