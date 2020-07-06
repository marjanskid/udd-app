import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { SearchComponent } from './components/search/search.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
