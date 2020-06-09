import { Subscription } from 'rxjs';
import { CreateArticleComponent } from './create-article/create-article.component';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from '../service/article.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('matTab') matTab: MatTabGroup;
  subcribe: Subscription;
  constructor(
    private dialog: MatDialog,
    private articleService: ArticleService
  ) {}

  // Get global article and then save to article service
  ngOnInit(): void {
    this.subcribe = this.articleService.getGlobalArticle().subscribe(ele => {
      this.articleService.globalArticle.next(ele);
    });
  }

  // Navigate to tag when user click a tag
  navigateTab() {
    this.matTab.selectedIndex = 2;
  }

  // Open CreateArticle component
  createArticle() {
    const dialogRef = this.dialog.open(CreateArticleComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data === 'post') {
        return this.articleService.getGlobalArticle().subscribe(ele => {
          this.articleService.globalArticle.next(ele);
          this.matTab.selectedIndex = 1;
        });
      }
    });
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
