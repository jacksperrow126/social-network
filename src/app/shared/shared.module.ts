import { ArticleComponent } from './../home/article/article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from '../home/article/article-preview/article-preview.component';
import { ArticleDetailComponent } from '../home/article/article-detail/article-detail.component';
import { CommentComponent } from '../home/article/comment/comment.component';
import { EditArticleComponent } from '../home/article/edit-article/edit-article.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const SharedComponent = [
  ArticleComponent,
  ArticlePreviewComponent,
  ArticleDetailComponent,
  CommentComponent,
  EditArticleComponent
];
@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, MaterialModule, FormsModule, RouterModule],
  exports: [SharedComponent]
})
export class SharedModule {}
