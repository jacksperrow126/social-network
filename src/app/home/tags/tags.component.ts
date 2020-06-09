import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: string[];
  constructor(private articleService: ArticleService, private router: Router) {}

  // Get Tags
  ngOnInit(): void {
    this.articleService.getTags().subscribe(ele => (this.tags = ele.tags));
  }

  // Navigate to articles by tag
  displayTag(tag: string) {
    this.router.navigate(['/home', tag]);
  }
}
