import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScientificAreaService {

  constructor(private http: HttpClient, private router: Router) { }

  getScientificAreas(){
    console.log("getScientificAreas");
    return this.http.get(environment.apiUrl + 'scientific-area') as Observable<any>;
  }
}
