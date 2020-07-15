import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { ScientificAreaService } from '../../services/scientific-area.service';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tipPretrage = 0;
  private pretragaForm: FormGroup;
  prikaziRezultate = false;
  radovi = [];
  naucneOblastiList = [];

  private frazaOznacena = false;
  private nazivCasopisa = "";
  private naslovRada = "";
  private autori = "";
  private kljucniPojmovi = "";
  private naucneOblasti = "";
  private sadrzaj = "";

  constructor(private route: ActivatedRoute, private searchService: SearchService, 
              private scientificAreaService: ScientificAreaService, private articleService: ArticleService) {

    this.route.params.subscribe( params => {
      this.tipPretrage = params.type; 
    });

    this.prikaziRezultate = false;

  }

  ngOnInit() {

    this.createForm();
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

  createForm(){
    this.pretragaForm = new FormGroup({
      nazivCasopisa: new FormControl(''),
      naslovRada: new FormControl(''),
      autori: new FormControl(''),
      kljucniPojmovi: new FormControl(''),
      naucneOblasti: new FormControl('')
    });
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

  buyArticle(articleId){
    console.log('kupi rad id: ' + articleId);
    alert("Pokusa kupovine rada id: " + articleId);

    // this.radService.kupiRad(radId).subscribe(
    //   res => {
    //     alert('Uspesno ste kupili rad');
    //     window.location.href = 'search/' + this.tipPretrage;
    //   }, err => {
    //     alert("Error");
    //   }
    // );
  }

  search() {
    if(this.tipPretrage == 1){

      let fraza = 0;
      if(this.frazaOznacena){
        fraza = 1;
      }

      this.searchService.search(this.nazivCasopisa, fraza, "magazineName").subscribe(
        res=>{
          console.log(res);
          this.radovi = res;
          this.prikaziRezultate = true;
        },
        error=>{
          console.log(error);
        }
      )

    } else if(this.tipPretrage == 2){

      let fraza = 0;
      if (this.frazaOznacena) {
       fraza = 1; 
      }

      this.searchService.search(this.naslovRada, fraza, "name").subscribe(
        res=>{
          console.log(res);
          this.radovi = res;
          this.prikaziRezultate = true;
        },
        error=>{
          console.log(error);
        }
      )
      
    } else if(this.tipPretrage == 3) {

      let fraza = 0;
      if (this.frazaOznacena) {
        fraza = 1; 
      }
      
      this.searchService.search(this.autori, fraza, "author").subscribe(
        res=>{
          console.log(res);
          this.radovi = res;
          this.prikaziRezultate = true;
        },
        error=>{
          console.log(error);
        }
      )

    } else if(this.tipPretrage == 4) {

      let fraza = 0;
      if (this.frazaOznacena) {
       fraza = 1; 
      }
      
      this.searchService.search(this.kljucniPojmovi, fraza, "keyWords").subscribe(
        res=>{
          console.log(res);
          this.radovi = res;
          this.prikaziRezultate = true;
        },
        error=>{
          console.log(error);
        }
      )
      
    } else if (this.tipPretrage == 5) {

      let fraza = 0;
      if (this.frazaOznacena) {
        fraza = 1; 
      }
      
      this.searchService.search(this.sadrzaj, fraza, "articleFile").subscribe(
        res=>{
          console.log(res);
          this.radovi = res;
          this.prikaziRezultate = true;
        },
        error=>{
          console.log(error);
        }
      )
      
    } else if (this.tipPretrage == 6) {

      let temp = "";

      for(let i=0; i<this.naucneOblasti.length; i++){
        temp = temp.concat(this.naucneOblasti[i]);
        temp = temp.concat(', ');
      }
    
      if(temp == ""){
        alert("Odaberite naucne oblasti");
        return;
      }
      
      temp = temp.substring(0,temp.length-1);
      console.log(temp);

      this.searchService.search(temp, 0, "scientificField").subscribe(
        res=>{
        this.radovi = res;
        this.prikaziRezultate = true;
        },
        error=>{
          console.log(error);
        }
      )
      
    }
  
  }

}