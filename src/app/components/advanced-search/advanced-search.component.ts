import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { ScientificAreaService } from '../../services/scientific-area.service';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  private pretragaForm: FormGroup;
  prikaziRezultate = false;
  radovi = [];
  private naucneOblastiList = [];

  private nazivCasopisaOznacen: string;
  private naslovRadaOznacen: string;
  private autoriOznaceni: string;
  private kljucniPojmoviOznaceni: string;
  private sadrzajOznacen: string;

  private frazaNazivCasopisa = false;
  private frazaNaslovRada = false;
  private frazaAutori = false;
  private frazaKljucniPojmovi = false;
  private frazaSadrzaj = false;

  private nazivCasopisa = "";
  private naslovRada = "";
  private autori = "";
  private kljucniPojmovi = "";
  private naucneOblasti = "";
  private sadrzaj = "";

  constructor(private scientificAreaService: ScientificAreaService,
              private searchService: SearchService, private articleService: ArticleService) {
    
    this.nazivCasopisaOznacen = "true";
    this.naslovRadaOznacen = "true";
    this.autoriOznaceni = "true";
    this.kljucniPojmoviOznaceni = "true";
    this.sadrzajOznacen = "true";

  }

  ngOnInit() {

    this.prikaziRezultate = false;

    this.scientificAreaService.getScientificAreas().subscribe(
      res=>{
        console.log(res);
        this.naucneOblastiList = res;
      },
      error=>{
        console.log(error);
      }
    );
  }

  // preuzmiRad(id) {

  //   console.log('preuzmi rad id: ' + id);

  //   this.radService.downloadRad(id).subscribe(
  //     res => {
  //       var blob = new Blob([res], {type: 'application/pdf'});
  //       var url= window.URL.createObjectURL(blob);
  //       window.open(url, "_blank");
  //     }, err => {
  //       alert("Error while download file");
  //     }
  //   );
  // }

  // kupiRad(radId){
  //   console.log('kupi rad id: ' + radId);

  //   this.radService.kupiRad(radId).subscribe(
  //     res => {
  //       alert('Uspesno ste kupili rad');
  //       window.location.href = 'advancedSearch';
  //     }, err => {
  //       alert("Error");
  //     }
  //   );
  // }

  search() {
    let temp = "";

    for (let i = 0; i < this.naucneOblasti.length; i++) {
      temp = temp.concat(this.naucneOblasti[i]);
      temp = temp.concat(', ');
    }

    temp = temp.substring(0, temp.length - 1);
    console.log(temp);

    const o = {
      magazineName:  this.nazivCasopisa,
      magazineNameSelected: this.nazivCasopisaOznacen === "true",
      name: this.naslovRada,
      nameSelected: this.naslovRadaOznacen === "true",
      author: this.autori,
      authorSelected: this.autoriOznaceni === "true",
      keyWords: this.kljucniPojmovi,
      keyWordsSelected: this.kljucniPojmoviOznaceni === "true",
      articleFile: this.sadrzaj,
      articleFileSelected: this.sadrzajOznacen === "true",
      scientificField: temp,
      phraseMagazinName: this.frazaNazivCasopisa,
      phraseName: this.frazaNaslovRada,
      phraseAuthor: this.frazaAutori,
      phraseKeyWords: this.frazaKljucniPojmovi,
      phraseArticleFile: this.frazaSadrzaj
    }

    console.log(o);

    this.searchService.advancedSearch(o).subscribe(
      res => {
        console.log(res);
        this.radovi = res;
        this.prikaziRezultate = true;
      },
      error => {
        console.log(error);
      }
    );

  }

  downloadArticle(id) {

    console.log('preuzmi rad id: ' + id);

    this.articleService.downloadArticle(id).subscribe(
      res => {
        var blob = new Blob([res], {type: 'application/pdf'});
        var url= window.URL.createObjectURL(blob);
        window.open(url, "_blank");
      }, err => {
        alert("Error while download file");
      }
    );
  }

}
