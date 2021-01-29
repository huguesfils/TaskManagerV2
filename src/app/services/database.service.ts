import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afFirestore: AngularFirestore) { }

  addTask(data: object): boolean{
    this.afFirestore.collection('tasks').add(data);
    return true
  }

  getAllTasks(): Array<object>{
    this.afFirestore.collection('task').get().subscribe
  }

  
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
