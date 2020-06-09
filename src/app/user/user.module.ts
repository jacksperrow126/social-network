import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCoverComponent } from './user-cover/user-cover.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { FavoriteArticlesComponent } from './favorite-articles/favorite-articles.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FollowerComponent } from './follower/follower.component';

@NgModule({
  declarations: [
    UserComponent,
    UserCoverComponent,
    UserProfileComponent,
    MyArticlesComponent,
    FavoriteArticlesComponent,
    EditProfileComponent,
    FollowerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class UserModule {}
