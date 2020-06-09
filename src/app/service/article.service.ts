import {
  ArticleDetail,
  ArticleList,
  ArticleToEdit,
  Comment
} from 'src/app/interface/interface';
import {
  ArticleToCreate,
  GetDetail,
  Tags,
  Comments
} from './../interface/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  API_URL = 'https://conduit.productionready.io/api';
  globalArticle = new Subject<ArticleList>();
  constructor(private http: HttpClient) {}

  getDemoArticle(offset = '0') {
    return this.http.get<ArticleList>(this.API_URL + '/articles', {
      params: {
        limit: '20',
        offset
      }
    });
  }

  getGlobalArticle(offset = '0') {
    return this.http.get<ArticleList>(this.API_URL + '/articles', {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      },
      params: {
        limit: '20',
        offset
      }
    });
  }

  getFeed(offset = '0') {
    return this.http.get<ArticleList>(this.API_URL + '/articles/feed/', {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      },
      params: {
        limit: '10',
        offset
      }
    });
  }

  getArticleByTag(tag: string, offset = '0') {
    return this.http.get<ArticleList>(this.API_URL + '/articles', {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      },
      params: {
        limit: '20',
        tag,
        offset
      }
    });
  }

  getArticleDetail(slug: string) {
    return this.http.get<GetDetail>(this.API_URL + '/articles/' + slug, {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      }
    });
  }

  like(slug: string) {
    return this.http.post<GetDetail>(
      `https://conduit.productionready.io/api/articles/${slug}/favorite`,
      {},
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }

  dislike(slug: string) {
    return this.http.delete<GetDetail>(
      `https://conduit.productionready.io/api/articles/${slug}/favorite`,
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }

  createArticle(formValue: ArticleToCreate) {
    return this.http.post<ArticleDetail>(
      this.API_URL + '/articles',
      {
        article: formValue
      },
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }

  editArticle(formValue: ArticleToEdit, slug: string) {
    return this.http.put<ArticleDetail>(
      this.API_URL + '/articles/' + slug,
      {
        article: formValue
      },
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }

  deleteArticle(slug: string) {
    return this.http.delete<ArticleDetail>(this.API_URL + '/articles/' + slug, {
      headers: {
        authorization: 'Token' + ' ' + localStorage.getItem('currentUserToken')
      }
    });
  }
  getTags() {
    return this.http.get<Tags>(this.API_URL + '/tags');
  }

  getComment(slug: string) {
    return this.http
      .get<Comments>(this.API_URL + `/articles/${slug}/comments`)
      .pipe(delay(1000));
  }

  addComment(formValue, slug: string) {
    return this.http.post<Comment>(
      this.API_URL + `/articles/${slug}/comments`,
      {
        comment: formValue
      },
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }

  deleteComment(slug: string, id: string) {
    return this.http.delete<Comments>(
      this.API_URL + `/articles/${slug}/comments/${id}`,
      {
        headers: {
          authorization:
            'Token' + ' ' + localStorage.getItem('currentUserToken')
        }
      }
    );
  }
}
