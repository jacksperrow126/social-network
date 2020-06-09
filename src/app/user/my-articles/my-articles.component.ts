import { Subscription } from 'rxjs';
import { ArticleDetail } from 'src/app/interface/interface';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit, OnChanges, OnDestroy {
  articles: ArticleDetail[];
  show = 0;
  endPage: number;
  subcribe: Subscription;
  @Input() username: string;
  constructor(private userService: UserService) {}

  // Get user and get articles
  ngOnInit() {
    this.subcribe = this.userService.userAfterchange.subscribe(
      (ele: string) => {
        this.userService.myArticle(ele).subscribe(myArticle => {
          this.articles = myArticle.articles;
          this.endPage = Math.floor(myArticle.articlesCount / 20);
        });
      }
    );
  }

  // Get articles when user change
  ngOnChanges() {
    this.userService.myArticle(this.username).subscribe(myArticle => {
      this.articles = myArticle.articles;
      this.endPage = Math.floor(myArticle.articlesCount / 20);
    });
  }

  // Pagination
  next() {
    this.show += 1;
    this.articles = undefined;
    this.userService
      .getFavoriteArticle(this.username, this.show * 20 + '')
      .subscribe(ele => {
        this.articles = ele.articles;
      });
  }

  // Pagination
  back() {
    this.show -= 1;
    this.articles = undefined;
    this.userService
      .getFavoriteArticle(this.username, this.show * 20 + '')
      .subscribe(ele => {
        this.articles = ele.articles;
      });
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
