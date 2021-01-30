import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Data } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afFirestore: AngularFirestore) { }

  addTask(data: object): boolean{
    this.afFirestore.collection('tasks').add(data);
    return true
  }

  getAllTasks(): Array<string>{
  let tasks = []
    this.afFirestore.collection('task').get().subscribe((snapshot) => {
      snapshot.docs.forEach(tasks => {
        tasks.data
      });
    })
    return tasks
  }
/*
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
*/
  
/*
  getTask(taskId: string): object {

  }
  

  deleteTask(taskId: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }
  editTask(task:any){
    this.deleteTask(task);
    this.showForm();
    this.title = task.title;
    this.description = task.description;
    }*/
}
