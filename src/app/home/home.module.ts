import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { TagsComponent } from './tags/tags.component';
import { ArticleByTagComponent } from './article-by-tag/article-by-tag.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FeedComponent } from './feed/feed.component';
import { GlobalArticleComponent } from './global-article/global-article.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { FormsModule } from '@angular/forms';
import { FindUserComponent } from './find-user/find-user.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserPreviewComponent,
    TagsComponent,
    ArticleByTagComponent,
    CreateArticleComponent,
    FeedComponent,
    GlobalArticleComponent,
    FindUserComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [
    ArticleDetailComponent,
    CreateArticleComponent,
    EditArticleComponent
  ]
})
export class HomeModule {}
