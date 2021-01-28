import { isEmptyExpression } from '@angular/compiler';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {
  resultat: number
  solution: String
  kmToMiles: boolean = true
  inputValue: number

  constructor() { }

  ngOnInit() {
  }

  switch(): void { // inutile mais comment faire ? 
    this.kmToMiles = !this.kmToMiles
  }

  convert(): void {  // si aucune données affiche NaN -> rajouter une condition ?
    if (this.checkIsNan()) {
      this.solution = "Veuillez entrer une valeur."
    } else {
      if (this.kmToMiles) {
        this.resultat = this.inputValue/1.6
        this.solution = "Le résultat est " + this.resultat + " Km/h."
        } else {
          this.resultat = this.inputValue*1.6
          this.solution = "Le résultat est " + this.resultat + " miles/heures."
        }
     console.log(this.resultat);
      }
  }

  checkIsNan(): boolean {
    console.log('line 42', this.inputValue)
    return isNaN(this.inputValue) || this.inputValue === null
  }

  updateVal(): void {
    this.solution = ''
  }
}
