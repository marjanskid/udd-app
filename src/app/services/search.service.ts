import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router: Router) { }

  getNaucneOblasti(){
    console.log("getNaucneOblasti");
    return this.http.get(environment.apiUrl + 'search/scientificArea') as Observable<any>;
  }

  search(parametar, fraza, tip){
    console.log(parametar + ' ' + fraza + ' ' + tip);
    return this.http.get(environment.apiUrl + 'pretraga/customPretraga/' + fraza + '/' + parametar + '/' + tip) as Observable<any>;
  }

  advancedSearch(o){
    return this.http.post(environment.apiUrl + 'pretraga/advancedPretraga', o) as Observable<any>;
  }

  searchByGeoSpacing(procesId){
    return this.http.get(environment.apiUrl + 'pretraga/geoSpacing/' + procesId) as Observable<any>;
  }

  searchByMoreLikeThis(procesId){
    return this.http.get(environment.apiUrl + 'pretraga/moreLikeThis/' + procesId) as Observable<any>;
  }

  searchByNaucneOblasti(procesId){
    return this.http.get(environment.apiUrl + 'pretraga/naucneOblasti/' + procesId) as Observable<any>;
  }

  searchAll(procesId){
    return this.http.get(environment.apiUrl + 'pretraga/all/' + procesId) as Observable<any>;
  }

}
