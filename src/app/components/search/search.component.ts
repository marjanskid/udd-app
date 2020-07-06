import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { ScientificAreaService } from '../../services/scientific-area.service';

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
              private scientificAreaService: ScientificAreaService) {

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
  //       window.location.href = 'search/' + this.tipPretrage;
  //     }, err => {
  //       alert("Error");
  //     }
  //   );
  // }

  search() {
    if(this.tipPretrage == 1){

      let fraza = 0;
      if(this.frazaOznacena){
       fraza = 1; 
      }

      this.searchService.search(this.nazivCasopisa, fraza, "naslovCasopisa").subscribe(
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

      this.searchService.search(this.naslovRada, fraza, "naslov").subscribe(
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
      
      this.searchService.search(this.autori, fraza, "autori").subscribe(
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
      
      this.searchService.search(this.kljucniPojmovi, fraza, "kljucniPojmovi").subscribe(
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
      
      this.searchService.search(this.sadrzaj, fraza, "tekst").subscribe(
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

      this.searchService.search(temp, 0, "naucnaOblast").subscribe(
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