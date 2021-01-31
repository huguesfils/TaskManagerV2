import { Component } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database'
import { PopoverController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page'
import {PopoverComponent} from '../popover/popover.component'

import {DatabaseService} from '../services/database.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  title: string;
  description: string;
  addingTask: boolean;
 

  detailsPage = DetailsPage;

  constructor(
    private databaseService: DatabaseService,
    public afDB: AngularFireDatabase, 
    public popoverController: PopoverController) {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.currentDate = date.toLocaleDateString('fr-FR', options);
    this.getTasks();
    console.log("test getTask()")
  }

  async showHelp(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }

  addTask() {
    this.databaseService.addTask({
      title: this.title,
      description: this.description,
      date: new Date().toISOString(),
    })
    this.showForm();
  }
  
  showForm() {
    this.addingTask = !this.addingTask;
    this.title = '';
    this.description = '';
  }

  getTasks() { 
    this.databaseService.getAllTasks();
  }

  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }
  editTask(task:any){
    this.deleteTask(task);
    this.showForm();
    this.title = task.title;
    this.description = task.description;
    }

}


