import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient, private router: Router) { }

  getArticles() {
    console.log("getArticles");
    return this.http.get(environment.apiUrl + 'article') as Observable<any>;
  }

  submitArticleData(articleData) {
    console.log("submitArticleData");
    console.log("articleData", articleData);
    return this.http.post(environment.apiUrl + 'article/submitArticleData', articleData);
  }

  downloadArticle(articleId) {
    const httpOptions = {
      'responseType'  : 'arraybuffer' as 'json'
    };
    return this.http.get(environment.apiUrl + "article/download/".concat(articleId), httpOptions) as Observable<any>;
  }

}
