import { ArticleList, ArticleDetail, User } from 'src/app/interface/interface';
import { Profile } from './../interface/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'https://conduit.productionready.io/api';
  userAfterchange = new Subject();
  constructor(private http: HttpClient) {}

  getProfile(username: string) {
    return this.http
      .get<Profile>(this.API_URL + '/profiles/' + username, {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      })
      .pipe(delay(500));
  }

  editProfileUser(userUpdate) {
    return this.http.put<User>(this.API_URL + '/user', userUpdate, {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      }
    });
  }

  myArticle(author: string, offset = '0') {
    return this.http.get<ArticleList>(this.API_URL + '/articles', {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      },
      params: {
        author,
        offset
      }
    });
  }

  getFavoriteArticle(user: string, offset = '0') {
    return this.http.get<ArticleList>(this.API_URL + '/articles', {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      },
      params: {
        favorited: user,
        offset
      }
    });
  }

  follow(username: string) {
    return this.http.post<ArticleDetail>(
      `${this.API_URL}/profiles/${username}/follow`,
      {},
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }

  unfollow(username: string) {
    return this.http.delete<ArticleDetail>(
      `${this.API_URL}/profiles/${username}/follow`,
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }
}
