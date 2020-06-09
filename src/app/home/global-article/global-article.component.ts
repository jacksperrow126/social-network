import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { ArticleDetail } from 'src/app/interface/interface';

@Component({
  selector: 'app-global-article',
  templateUrl: './global-article.component.html',
  styleUrls: ['./global-article.component.css']
})
export class GlobalArticleComponent implements OnInit, OnDestroy {
  articles: ArticleDetail[];
  show = 0;
  endPage: number;
  subcribe: Subscription;
  constructor(private articleService: ArticleService) {}

  // Get global article
  ngOnInit(): void {
    this.subcribe = this.articleService.globalArticle.subscribe(ele => {
      this.articles = ele.articles;
      this.endPage = Math.floor(ele.articlesCount / 20);
    });
  }

  // Pagination
  next() {
    this.show += 1;
    this.articles = undefined;
    this.articleService.getGlobalArticle(this.show * 20 + '').subscribe(ele => {
      this.articles = ele.articles;
    });
  }
  // Pagination
  back() {
    this.show -= 1;
    this.articles = undefined;
    this.articleService.getGlobalArticle(this.show * 20 + '').subscribe(ele => {
      this.articles = ele.articles;
    });
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
