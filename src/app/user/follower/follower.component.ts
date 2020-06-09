import { ArticleService } from 'src/app/service/article.service';
import { Component, OnInit } from '@angular/core';
import { ArticleList } from 'src/app/interface/interface';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  feed: ArticleList;
  offset = 0;
  follower: any;
  name = [];
  loading = false;
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}

  // Find follower
  searchFriend() {
    this.loading = true;
    this.articleService.getFeed(this.offset * 10 + '').subscribe(ele => {
      this.offset += 1;
      this.feed = ele;
      this.feed.articles.forEach(article => {
        this.name.push(article.author.username);
      });
      if (this.name.length < ele.articlesCount) {
        this.searchFriend();
      } else {
        this.follower = new Set(this.name);
        this.loading = false;
      }
    });
  }
}
