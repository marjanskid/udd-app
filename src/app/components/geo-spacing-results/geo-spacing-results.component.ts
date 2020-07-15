import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-geo-spacing-results',
  templateUrl: './geo-spacing-results.component.html',
  styleUrls: ['./geo-spacing-results.component.css']
})
export class GeoSpacingResultsComponent implements OnInit {

  articleId = 0;
  reviewers = [];
  test: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {

    this.route.params.subscribe( params => {
      this.articleId = params.articleId; 
    });
  }

  ngOnInit(): void {
    this.geoSpacingReviewers(this.articleId);
  }

  geoSpacingReviewers(articleId) {
    this.searchService.searchByGeoSpacing(articleId).subscribe(
      res=>{
        console.log(res);
        this.test = res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
