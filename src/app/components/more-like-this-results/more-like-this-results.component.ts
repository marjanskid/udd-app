import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-more-like-this-results',
  templateUrl: './more-like-this-results.component.html',
  styleUrls: ['./more-like-this-results.component.css']
})
export class MoreLikeThisResultsComponent implements OnInit {

  articleId = 0;
  radovi = [];

  constructor(private route: ActivatedRoute, private searchService: SearchService) {

    this.route.params.subscribe( params => {
      this.articleId = params.articleId; 
    });
  }

  ngOnInit(): void {
    this.moreLikeThisArticles(this.articleId);
  }

  moreLikeThisArticles(articleId) {
    this.searchService.searchByMoreLikeThis(articleId).subscribe(
      res=>{
        console.log(res);
        this.radovi = res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
