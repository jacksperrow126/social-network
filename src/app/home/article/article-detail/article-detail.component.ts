import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/app/service/article.service';
import { ArticleDetail, User } from 'src/app/interface/interface';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  articleDetail: ArticleDetail;
  commentOn = false;
  currentUser: User;
  subcribe: Subscription;
  constructor(
    public dialogRef: MatDialogRef<ArticleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private articleService: ArticleService,
    private authService: AuthService,
    private router: Router
  ) {}

  // Get article's data and current user
  ngOnInit(): void {
    this.articleDetail = this.data;
    this.subcribe = this.authService.currentUser.subscribe(ele => {
      this.currentUser = ele;
    });
  }

  // Like articles
  like() {
    this.articleService.like(this.articleDetail.slug).subscribe(ele => {
      this.articleDetail = ele.article;
      this.data = ele.article;
    });
  }

  delete(slug: string) {
    this.articleService.deleteArticle(slug).subscribe(() => {});
  }

  navigateToUser() {
    if (this.currentUser) {
      this.router.navigate(['/user', this.articleDetail.author.username]);
      this.dialogRef.close();
    }
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
