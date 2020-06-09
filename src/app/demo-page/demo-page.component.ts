import { ArticleDetail } from './../interface/interface';
import { ArticleService } from './../service/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {
  articles: ArticleDetail[];
  show = 0;
  endPage: number;
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getDemoArticle().subscribe(ele => {
      this.articles = ele.articles;
      this.endPage = Math.floor(ele.articlesCount / 20);
    });
  }

  next() {
    this.show += 1;
    this.articles = undefined;
    this.articleService.getDemoArticle(this.show * 20 + '').subscribe(ele => {
      this.articles = ele.articles;
    });
  }
  back() {
    this.show -= 1;
    this.articles = undefined;
    this.articleService.getDemoArticle(this.show * 20 + '').subscribe(ele => {
      this.articles = ele.articles;
    });
  }
}
