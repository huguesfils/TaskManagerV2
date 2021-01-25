import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('tasks')
   }

  ngOnInit() {
  }

}
