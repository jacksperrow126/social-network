import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { EditArticleComponent } from './../edit-article/edit-article.component';
import { AuthService } from 'src/app/service/auth.service';
import { User } from './../../../interface/interface';
import { UserService } from './../../../service/user.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ArticleDetail } from 'src/app/interface/interface';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from 'src/app/service/article.service';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit, OnDestroy {
  @Input() article: ArticleDetail;
  currentUser: User;
  subcribe: Subscription;
  err: HttpErrorResponse;
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private articleService: ArticleService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  // Get current user data
  ngOnInit(): void {
    this.subcribe = this.authService.currentUser.subscribe(ele => {
      this.currentUser = ele;
    });
  }

  // Open article detail with Mat Dialog
  openDetail() {
    const dialogRef = this.dialog.open(ArticleDetailComponent, {
      width: '800px',
      data: this.article
    });
    dialogRef.afterClosed().subscribe(ele => {
      if (ele === 'delete') {
        document.querySelector('.a' + this.article.slug).classList.add('hide');
        setTimeout(() => {
          document
            .querySelector('.a' + this.article.slug)
            .setAttribute('style', 'display: none');
        }, 500);
      } else {
        if (this.currentUser) {
          this.articleService
            .getArticleDetail(this.article.slug)
            .subscribe(data => {
              this.article = data.article;
            });
        }
      }
    });
  }

  // Open article edit with Mat Dialog - just work with current user's articles
  openEdit() {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '800px',
      data: this.article
    });
    dialogRef.afterClosed().subscribe(() => {
      return this.articleService
        .getArticleDetail(this.article.slug)
        .subscribe(data => {
          this.article = data.article;
        });
    });
  }

  // Follow/unfollow another user
  follow(username: string) {
    if (this.article.author.following) {
      this.article.author.following = false;
      this.userService.unfollow(username).subscribe(() => {});
    } else {
      this.article.author.following = true;
      this.userService.follow(username).subscribe(() => {});
    }
  }

  // Like/unlike articles
  like(slug: string) {
    if (this.article.favorited === false) {
      this.article.favorited = true;
      this.articleService.like(slug).subscribe(ele => {
        this.article = ele.article;
      });
    } else {
      this.article.favorited = false;
      this.articleService.dislike(slug).subscribe(ele => {
        this.article = ele.article;
      });
    }
  }

  // Navigate to user page
  navigateToUser() {
    if (this.currentUser) {
      this.router.navigate(['/user', this.article.author.username]);
    }
  }

  // Open snack bar require sign-in
  signInRequire() {
    this.snackBar.open('You have to sign in to use ', 'this function', {
      duration: 1500
    });
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
