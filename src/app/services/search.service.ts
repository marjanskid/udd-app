import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router: Router) { }

  search(parametar, fraza, tip) {
    console.log(parametar + ' ' + fraza + ' ' + tip);
    console.log(environment.apiUrl + 'search/customSearch/' + fraza + '/' + parametar + '/' + tip);
    
    return this.http.get(environment.apiUrl + 'search/customSearch/' + fraza + '/' + parametar + '/' + tip) as Observable<any>;
  }

  advancedSearch(o) {
    return this.http.post(environment.apiUrl + 'search/advancedSearch', o) as Observable<any>;
  }

  searchByGeoSpacing(articleId) {
    return this.http.get(environment.apiUrl + 'search/geoSpacing/' + articleId) as Observable<any>;
  }

  searchByMoreLikeThis(articleId) {
    return this.http.get(environment.apiUrl + 'search/moreLikeThis/' + articleId) as Observable<any>;
  }

  searchByNaucneOblasti(procesId) {
    return this.http.get(environment.apiUrl + 'search/naucneOblasti/' + procesId) as Observable<any>;
  }

  searchAll() {
    return this.http.get(environment.apiUrl + 'search/') as Observable<any>;
  }

}
