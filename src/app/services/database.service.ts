import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afFirestore: AngularFirestore) { }

  addTask(data: object): boolean{
    this.afFirestore.collection('tasks').add(data);
    return true
  }

  getAllTasks(): Promise<Array<object>> {
    // On créé une promesse car on va avoir besoin d’être insynchrone: on ne sait pas quand firestore nous renvois les données
    return new Promise((resolve,reject) => {
    // on cherche dans la collection tasks tous les documents. Cela retourne un query snapshot
    this.afFirestore.collection('tasks').get().subscribe((snapshot: firebase.firestore.QuerySnapshot) => {
    const tasks: Array<object> = []
    // Si le snapshot n’est pas vide, il y a des documents
    if (!snapshot.empty) {
    // On lit les document les un après les autres
    snapshot.forEach((doc: firebase.firestore.DocumentData) => {
    // Doc -> est le document. .data() c’est pour récupérer le contenu
    const task: object = doc.data()
    // On ajoute l’id manuellement, car pratique
    task['id'] = doc.id
    // On l’ajoute dans l'array
    tasks.push(task)
    })
    }
    // On a finit, donc on retourne les taches
    resolve(tasks)
    console.log('test2')
    })
    });
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
