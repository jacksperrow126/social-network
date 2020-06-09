import { ArticleDetail } from 'src/app/interface/interface';
import { ArticleService } from './../../service/article.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-by-tag',
  templateUrl: './article-by-tag.component.html',
  styleUrls: ['./article-by-tag.component.css']
})
export class ArticleByTagComponent implements OnInit, OnDestroy {
  tag: string;
  articles: ArticleDetail[];
  subcribe: Subscription;
  show = 0;
  endPage: number;
  constructor(
    private rout: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  // Get param on router and get data with it
  ngOnInit(): void {
    this.subcribe = this.rout.params.subscribe(ele => {
      this.tag = ele.tag;
      this.articles = undefined;
      this.articleService.getArticleByTag(this.tag).subscribe(data => {
        this.articles = data.articles;
        this.endPage = Math.floor(data.articlesCount / 20);
        this.show = 0;
      });
    });
  }

  // Pagination
  next() {
    this.show += 1;
    this.articles = undefined;
    this.articleService
      .getArticleByTag(this.tag, this.show * 20 + '')
      .subscribe(ele => {
        this.articles = ele.articles;
        console.log(ele);
      });
  }

  // Pagination
  back() {
    this.show -= 1;
    this.articles = undefined;
    this.articleService
      .getArticleByTag(this.tag, this.show * 20 + '')
      .subscribe(ele => {
        this.articles = ele.articles;
      });
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
