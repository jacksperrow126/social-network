import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleDetail } from 'src/app/interface/interface';
import { ArticleService } from 'src/app/service/article.service';
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  articleDetail: ArticleDetail;
  constructor(
    public dialogRef: MatDialogRef<ArticleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.articleDetail = this.data;
  }

  // Edit Article
  editArticle(form: any) {
    this.articleService
      .editArticle(form.value, this.data.slug)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
