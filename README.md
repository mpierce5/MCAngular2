** I Recommend completing the Tour of heroes tutorial (https://angular.io/docs/ts/latest/tutorial/)
** This will give more insight into the structure of the ng2 app from the ground up.
** Slides located at https://docs.google.com/presentation/d/1TE3J166lPDcAXixknHGKRRe-__Gipj5zZ1tAI8xaxZ8/edit?usp=sharing
 
Instruction on how to build this project from scratch.
 
1. Download NodeJS
 - Go to https://nodejs.org/en/download/
   Explain why we are using NodeJS
   Download and install
   a. Open command prompt
     - Type node -v and verify that it is installed
     - npm install npm@latest -g
     - npm -v

2. InstallAngular CLI using NPM
  - https://github.com/angular/angular-cli
    Explain why, what, and how Angular CLI
    
    a. In command prompt
      - npm install -g angular-cli

3. Create a new project using Angular CLI 
   a. Navigate to a folder for your new project
     - ng new PROJECT_NAME
     - cd PROJECT_NAME
     - ng serve
   b. Navigate to the http://localhost:4200/

4. Create a new project in intellij
   a. Navigate to src/app/app.component.ts
   b. Make a change to the value of title variable (Hello MC!)
   c. Watch your webpage to see it update with your change
     - Congratulations (Hello World Completed)

5. Walk through files created
   a. config files
   b. App files
   c. Test Files

6. Explain what a component is (similar to web-component)
  - Imports 
  - Component Decorator (@Component)
    - selector reference index.html to show that app is bootstrapped with this component
    - templateUrl
    - styleUrls 
    - Services providers: [TranslationService]
  
  Class 
    - constructor
    - data members
    - functions
    
7. Create a new component using angular-cli (data-dump will show task data)
   ng generate component data-dump
   
8. Explain what files were created:
   data-dump.component.css
   data-dump.component.html
   data-dump.component.spec.ts
   data-dump.component.ts
   
9. Explain that component was added to app.module.ts as an import

10. Insert component into root component (app/app.component.html)
 -  <app-data-dump></app-data-dump>
 
11. Create a new folder for interfaces (app/interfaces)
12. Create a new interface for tasks (app/interfaces/Task.ts)
  export interface Task {
    taskName: string;
    dueDate: string;
    isNew: boolean;
  }

13. Import interface into component (app/data-dump/data-dump.component.ts)
 import { Task } from '../interfaces/Task'

14. Create an array of tasks in DataDumpComponent class (app/data-dump/data-dump.component.ts)
 tasks: Task[] = [
    {taskName:'Take Out trash', dueDate:'Thu Dec 01 2016 11:09:06 GMT-0700 (Mountain Standard Time)', isNew:false},
    {taskName:'Go Fly Fishing', dueDate:'Fri Dec 16 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true},
    {taskName:'Learn ng2', dueDate:'Thu Dec 15 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true}
  ];
  
15. Display data in DataDumpComponent template using *ngfor (app/data-dump/data-dump.component.html)
<div *ngFor="let task of tasks">
  {{ task.taskName }} {{ task.dueDate }} {{ task.isNew }}
</div>

16. Add bootstrap CDNs (app/index.html)
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc=" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  
17. Update DataDumpComponent template to show data in bootstrap table (app/data-dump/data-dump.component.html)
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

18. Add a click event to table row that displays task name on click. (Shows how to bind to events)
	- template (app/data-dump/data-dump.component.html)
		(click)="openTask(task.taskName)" (on tr)
		
	- component (app/data-dump/data-dump.component.ts)
		openTask(taskName: string): void{
			alert('navigated to ' + taskName);
		  }


19. Set header background color on Table (Show Property Binding)  
    (app/data-dump/data-dump.component.html)
		  [style.background-color]="getHeaderBackgroundColor()"
		
	- add function to component (app/data-dump/data-dump.component.ts)
		getHeaderBackgroundColor(): string{
			return 'gray';
		}

20. Use property binding for new tasks (using class)
		  (app/data-dump/data-dump.component.html)
			  [class.isNew]="task.isNew"
			
			create css style (app/data-dump/data-dump.component.css)
        .isNew {
          font-weight: bold;
        }
		  
21. Create a two way binding on the page
  (app/data-dump/data-dump.component.html)
    <div class="container">
      <input [(ngModel)]="searchTerm">
      <p>Two Way Binding -- {{searchTerm}}!</p>
    </div>
	
22. Two way binding is really a combination of binding to a [property] and an (event) 
	  -- below shows another way to write it
      <input [value]="searchTerm" (input)="searchTerm = $event.target.value">
      <p>Two Way Binding -- {{searchTerm}}!</p>
	
23. Add a filter for the date
    (app/data-dump/data-dump.component.html)
	    <td>{{ task.dueDate | date}}</td>
	
24. Make Table only display if data is present *ngIf 
	(app/data-dump/data-dump.component.html)
	  *ngIf="tasks && tasks.length" (on table element)
	
25. Create a service to retrieve the data
  a. In command prompt navigate to the folder that you want to service to be in.
	b. ng generate service tasks
	c. View files created and explain "Injectable" decorator 
	  app/data-dump/tasks.service.spec.ts
    app/data-dump/tasks.service.ts
  d. explain that it needs to be added as a provider in app.module.ts
	
26. Add it as a provider in app.module.ts
	a. put it in providers and hit alt enter for autocomplete
	b. console.log() in the service's constructor to make sure it loading
    constructor(  ) {
      console.log('test');
    }
  c. View output in browser console to see that it loaded
  d. Add debugger and show that you can debug typescript from browser
	
27. Import Tasks interface
  (app/data-dump/tasks.service.ts)
	  import { Task } from '../interfaces/Task'
	
28. Create tasks in service class
	(app/data-dump/tasks.service.ts)
	tasks: Task[] = [
    {taskName:'Take Out trash', dueDate:'Thu Dec 01 2016 11:09:06 GMT-0700 (Mountain Standard Time)', isNew:false},
    {taskName:'Go Fly Fishing', dueDate:'Fri Dec 16 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true},
    {taskName:'Learn ng2', dueDate:'Thu Dec 15 2016 12:00:00 GMT-0700 (Mountain Standard Time)', isNew:true}
  ];

29. Create a getTasks function in service (explain at a future time we can show how to make HTTP/RxJs calls)
	(app/data-dump/tasks.service.ts)
	getTasks(): Task[] {
		return this.tasks;
	}
	
30. Add TaskService as dependency to DataDump
  (app/data-dump/data-dump.component.ts)
	  import { TasksService } from './tasks.service'
	
31. Inject TaskService into DataDump using constructor
	(app/data-dump/data-dump.component.ts)
	  constructor(private tasksService: TasksService) { }

32. Remove hard coded tasks
  (app/data-dump/data-dump.component.ts)
    tasks: Task = [];
  
33. Retrieve task data in ngOnInit - explain lifecycles a little and highlight OnInit import
	(app/data-dump/data-dump.component.ts)
    ngOnInit() {
      this.tasks = this.tasksService.getTasks();
    }

34. Verify that App still is now retrieving data from service.
	
35. Explain re-usability of services (singletons) and components

36. Create a production build of the project by compiling project to a distributable using Angular-CLI
	ng build --prod --aot
	
37. show output files in app/dist folder
  a. Hit output files from current running server 
	b. Explain this will be what we serve

38. That's all folks!
