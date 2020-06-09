import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserForRegister } from '../interface/interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  err = {
    username: '',
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // Register acount and navigate to sign in page
  register(formValue: UserForRegister) {
    this.authService.register(formValue).subscribe(
      ele => {
        console.log(ele);
        this.back();
        this.snackBar.open('Sign Up:', 'Successful', {
          duration: 1000
        });
      },
      err => {
        this.err = err.error.errors;
        console.log(this.err);
      }
    );
  }

  back() {
    document.querySelector('.sign-up-form').classList.add('out');
    setTimeout(() => {
      this.router.navigateByUrl('/sign-in');
    }, 800);
  }
}
