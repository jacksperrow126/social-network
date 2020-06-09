import { Profile } from './../../interface/interface';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeWhile, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  user: Profile;
  startSearching = false;
  subject = new Subject();
  err: HttpErrorResponse;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  // Find user
  findUser(username: string) {
    this.startSearching = true;
    this.err = undefined;
    this.user = undefined;
    this.subject
      .pipe(
        debounceTime(500),
        switchMap((ele: string) => {
          return this.userService.getProfile(ele);
        })
      )
      .subscribe(
        ele => {
          this.user = ele;
        },
        err => {
          this.err = err;
        }
      );
    this.subject.next(username);
  }
}
