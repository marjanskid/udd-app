import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchService } from 'src/app/services/search.service';
import { ArticleDTO } from 'src/app/entities/article-dto';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

  naucneOblastiList = [];
  private href: any;
  private fileField = null;
  private fileName = null;
  workData: ArticleDTO = new ArticleDTO();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {

    this.searchService.getNaucneOblasti().subscribe(
      res=>{
        console.log(res);
        this.naucneOblastiList = res;
      },
      error=>{
        console.log(error);
      }
    );
  }

  submitWorkData() {

    this.workData.file = this.fileField.toString();
    this.workData.fileName = this.fileName.toString();
    console.log(this.workData.fileName + ' FILE NAME !');

    // this.workService.submitWorkData(this.workData).subscribe( res => {
    //       console.log(res);
    //       this.toastr.successToastr('Success!');


    //     }, err => {
    //       this.toastr.errorToastr("Greska");
    //     }
    // );
  }

  fileChooserListener(files: FileList, field) {
    this.fileName = files.item(0).name;

    const fileReader = new FileReader();

    fileReader.onload = (e) => {

      this.fileField = fileReader.result;
    };

    fileReader.readAsDataURL(files.item(0));
  }

}
