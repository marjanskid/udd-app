import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { SearchComponent } from './components/search/search.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { MoreLikeThisResultsComponent } from './components/more-like-this-results/more-like-this-results.component';
import { GeoSpacingResultsComponent } from './components/geo-spacing-results/geo-spacing-results.component';


const routes: Routes = [
  {
    path: "content",
    component: ContentComponent
  },
  {
    path: "uploadDocument",
    component: UploadDocumentComponent
  },
  { 
    path: 'search/:type',
    component: SearchComponent 
  },
  { 
    path: 'advancedSearch', 
    component: AdvancedSearchComponent 
  },
  { 
    path: 'more-like-this/:articleId',
    component: MoreLikeThisResultsComponent 
  },
  { 
    path: 'geo-spacing/:articleId',
    component: GeoSpacingResultsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
