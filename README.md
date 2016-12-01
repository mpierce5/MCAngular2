1. create a new component
2. explain files created
3. insert component into root component
4. Create a new folder for interfaces
5. Create a new interface for tasks

export interface Task {
  taskName: string;
  dueDate: string;
  isNew: boolean;
}

6. Import interface into component
import { Task } from '../interfaces/Task'

7. Create an array of tasks in the class
tasks: Task[] = [
    {taskName:'Take Out trash', dueDate:'Thu Dec 01 2016 11:09:06 GMT-0700 (Mountain Standard Time)', isNew:false},
    {taskName:'Go Fly Fishing', dueDate:'Fri Dec 16 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true},
    {taskName:'Learn ng2', dueDate:'Thu Dec 15 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true}
  ];
  
8. Display data in template using ngfor
<div *ngFor="let task of tasks">
  {{ task.taskName }} {{ task.dueDate }} {{ task.isNew }}
</div>

9.a Add bootstrap CDNs (Update notes)

9.b Add bootstrap table system to layout our data
	<table class="table">
	  <thead>
		<tr>
		  <th>Task Name</th>
		  <th>Due Date</th>
		</tr>
		</thead>
		<tbody>
		<tr *ngFor="let task of tasks">
		  <td>{{ task.taskName }}</td>
		  <td>{{ task.dueDate }}</td>
		</tr>
	  </tbody>
	</table>

10. Add a click event to each line that displays task name on click.
	- template
		(click)="openTask(task.taskName)" (on tr)
	- component
		openTask(taskName: string): void{
			alert('navigated to ' + taskName);
		  }


11. Show Propery Binding 
	- set header background color
		[style.background-color]="getHeaderBackgroundColor()"
		
		
	- add function to component
		getHeaderBackgroundColor(): string{
			return 'gray';
		}

11. Use property binding for new tasks
	template (tr)  	-[style.font-weight]="getBoldForNewTask(task.isNew)" 
	Class
		- getBoldForNewTask(isNew: boolean) : string{
			if(isNew)
			  return 'bold';
			else
			  return 'normal';
		  }
		  
		  -----------update
			[class.isNew]="task.isNew"
			
			create css style
			.isNew {
				font-weight: bold;
			}
		  ----------------
		  
12. Show two way binding -
	<input [(ngModel)]="searchTerm">
	<p>Two Way Binding -- {{searchTerm}}!</p>
	
13. Explain what is really happening with 2 way binding
	<input [value]="searchTerm" (input)="searchTerm = $event.target.value">

	<p>Two Way Binding -- {{searchTerm}}!</p>
	
14. Add a filter for the date
	- filters page
	
15. Make Table only display if data is present *ngIf 
	- *ngIf="tasks && tasks.length" (on table)
	
16. Create a service to retrieve the data
    Navigate to the folder that you want to service to be in.
	- ng generate service tasks
	- explain "Injectable" decorator
	- explain that it needs to be added as a provider
	
17. Add it as a provider in app.module.ts
	- put it in providers and hit alt enter for autocomplete
	- console.log() in the service to make sure it loading (constructor)
	- constructor(  ) {
		console.log('test');
	  }
	
18. import Tasks interface
	import { Task } from '../interfaces/Task'
	
19. Create static tasks in service (remove from data-dump)
	tasks: Task[] = [
    {taskName:'Take Out trash', dueDate:'Thu Dec 01 2016 11:09:06 GMT-0700 (Mountain Standard Time)', isNew:false},
    {taskName:'Go Fly Fishing', dueDate:'Fri Dec 16 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true},
    {taskName:'Learn ng2', dueDate:'Thu Dec 15 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true}
  ];

20. Create a getTasks function in service (explain at a future time we can show how to make ajax/rxjs calls)
	getTasks(): Task[] {
		return this.tasks;
	  }
	
21. Add taskService as dependency to Data Dump
	- import { TasksService } from './tasks.service'
	
22. Add to constructor
	- constructor(private tasksService: TasksService) { }
	
23. Get task data in ngOnInit - explain lifecycles a little
	ngOnInit() {
		this.tasks = this.tasksService.getTasks();
	}
	
24. Explain component re-use/subcomponent
	
25. Build project using angular click
	- ng build --prod --aot
	
26. show output files in dist folder
    - hit output files from current running server
	- explain this will be what we serve
