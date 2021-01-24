import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  switch(){
  }

  convert(){
     console.log(document.getElementById("inputKilometers").value);
  }
}
