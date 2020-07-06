import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AdvancedSearchComponent,
    SearchComponent,
    UploadDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
