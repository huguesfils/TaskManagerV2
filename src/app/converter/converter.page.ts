import { isEmptyExpression } from '@angular/compiler';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {
  inputKilometers: number
  inputMiles: number
  resultat: number
  solution: String

  constructor() { }

  ngOnInit() {
  }

  switch(){ // inutile mais comment faire ? 
  }

  convert(){  // si aucune données affiche NaN -> rajouter une condition ?
    if (this.inputKilometers === null) {
    this.resultat = this.inputMiles*1.6
    this.solution = "Le résultat est " + this.resultat + " Km/h."
    } else {
      this.resultat = this.inputKilometers/1.6
      this.solution = "Le résultat est " + this.resultat + " miles/heures."
    }
     console.log(this.resultat);
  }
}
