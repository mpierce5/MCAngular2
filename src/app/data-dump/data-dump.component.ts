import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/Task'
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-data-dump',
  templateUrl: './data-dump.component.html',
  styleUrls: ['./data-dump.component.css']
})
export class DataDumpComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

  getHeaderBackgroundColor(): string{
    return 'gray';
  }

  getBoldForNewTask(isNew: boolean) : string{
    if(isNew)
      return 'bold';
    else
      return 'normal';
    }

  //store data in a variable
  openTask(taskName: string): void{
    alert('navigated to ' + taskName);
  }

}
