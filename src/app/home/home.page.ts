import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore'
import { PopoverController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import {PopoverComponent} from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  title: string;
  description: string;
  addTask: boolean;
  tasks = [];

  detailsPage = DetailsPage;

  constructor(private afFirestore: AngularFirestore, public afDB: AngularFireDatabase, public popoverController: PopoverController) {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.currentDate = date.toLocaleDateString('fr-FR', options);
    this.getTasks();
  }

  async showHelp(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }

  addTaskToFirestore() {
    this.afFirestore.collection('tasks').add({
      title: this.title,
      description: this.description,
      date: new Date().toISOString(),
    });
    this.showForm();
  }
  
  showForm() {
    this.addTask = !this.addTask;
    this.title = '';
    this.description = '';
  }

  getTasks() {
    this.afDB.list('Tasks/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => {
        this.tasks.push({
          key: action.key,
          title: action.payload.exportVal().title,
          description: action.payload.exportVal().description,
          date: action.payload.exportVal().date.substring(11, 16),
        });
      });
    });
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


