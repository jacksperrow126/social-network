import { UserForSignIn } from './../interface/interface';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  err: HttpErrorResponse;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Login method will save user in local storage and navigate to Home page
  logIn(formValue: UserForSignIn) {
    this.authService.logIn(formValue).subscribe(
      ele => {
        this.authService.token = ele.user.token;
        this.authService.saveCurrentUser();
        this.router.navigateByUrl('/home');
        this.authService.currentUser.next(ele);
      },
      err => {
        this.err = err;
      }
    );
  }
}
