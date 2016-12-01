import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task'

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {taskName:'Take Out trash', dueDate:'Thu Dec 01 2016 11:09:06 GMT-0700 (Mountain Standard Time)', isNew:false},
    {taskName:'Go Fly Fishing', dueDate:'Fri Dec 16 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true},
    {taskName:'Learn ng2', dueDate:'Thu Dec 15 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true}
  ];

  constructor(  ) {
    console.log('test');
  }
  getTasks(): Task[] {
    return this.tasks;
  }
}
