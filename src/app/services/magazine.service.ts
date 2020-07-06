import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  constructor(private http: HttpClient, private router: Router) { }

  getMagazines(){
    console.log("getMagazines");
    return this.http.get(environment.apiUrl + 'magazine') as Observable<any>;
  }
}
