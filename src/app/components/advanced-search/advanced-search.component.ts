import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { ScientificAreaService } from '../../services/scientific-area.service';


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

  private nazivCasopisaOznacen = true;
  private naslovRadaOznacen = true;
  private autoriOznaceni = true;
  private kljucniPojmoviOznaceni = true;
  private sadrzajOznacen = true;

  private nazivCasopisa = "";
  private naslovRada = "";
  private autori = "";
  private kljucniPojmovi = "";
  private naucneOblasti = "";
  private sadrzaj = "";

  constructor(private scientificAreaService: ScientificAreaService,
              private searchService: SearchService) { }

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
      naslovCasopisa: this.nazivCasopisa,
      nazivCasopisaOznacen: this.nazivCasopisaOznacen,
      naslov: this.naslovRada,
      naslovRadaOznacen: this.naslovRadaOznacen,
      autori: this.autori,
      autoriOznaceni: this.autoriOznaceni,
      kljucniPojmovi: this.kljucniPojmovi,
      kljucniPojmoviOznaceni: this.kljucniPojmoviOznaceni,
      tekst: this.sadrzaj,
      sadrzajOznacen: this.sadrzajOznacen,
      naucnaOblast: temp,
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

}
