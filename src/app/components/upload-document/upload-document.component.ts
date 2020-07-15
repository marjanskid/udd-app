import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MagazineService } from 'src/app/services/magazine.service';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleDTO } from 'src/app/entities/article-dto';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

  naucneOblastiList = [];
  magazinesList = [];
  private href: any;
  private fileField = null;
  private fileName = null;
  articleData: ArticleDTO = new ArticleDTO();

  constructor(private magazineService: MagazineService, private articleService: ArticleService) { }

  ngOnInit(): void {

    this.magazineService.getMagazines().subscribe(
      res=>{
        console.log(res);
        this.magazinesList = res;
      },
      error=>{
        console.log(error);
      }
    );
  }

  submitWorkData() {

    this.articleData.articleFile = this.fileField.toString();
    this.articleData.fileName = this.fileName.toString();
    console.log(">>>>>>>>>>>>>>>>>>>", this.articleData.fileName + ' FILE NAME !');

    this.articleService.submitArticleData(this.articleData).subscribe( 
      res => {
        console.log(res);
        alert('Uspesno ste dodali rad!');
      }, err => {
        console.log("Greska pri dodavanju rada");
      }
    );
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
