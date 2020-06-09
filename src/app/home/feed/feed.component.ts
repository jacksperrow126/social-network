import { ArticleService } from './../../service/article.service';
import { Component, OnInit } from '@angular/core';
import { ArticleList, ArticleDetail } from 'src/app/interface/interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  articles: ArticleDetail[];
  checkFollow = false;
  show = 0;
  endPage: number;
  constructor(private articleService: ArticleService) {}

  // Get feed
  ngOnInit() {
    this.articleService.getFeed().subscribe(ele => {
      this.articles = ele.articles;
      this.endPage = Math.floor(ele.articlesCount / 10);
      if (this.articles.length === 0) {
        this.checkFollow = true;
      }
    });
  }

  // Pagination
  next() {
    this.show += 1;
    this.articles = undefined;
    this.articleService.getFeed(this.show * 10 + '').subscribe(ele => {
      this.articles = ele.articles;
    });
  }

  // Pagination
  back() {
    this.show -= 1;
    this.articles = undefined;
    this.articleService.getFeed(this.show * 10 + '').subscribe(ele => {
      this.articles = ele.articles;
    });
  }
}
