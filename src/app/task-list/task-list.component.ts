import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = []; 
  isLoading: boolean = true;  
  errorMessage: string = '';  

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data; 
        this.isLoading = false;  
      },
      (error) => {
        this.errorMessage = 'Erreur de récupération des tâches';  
        this.isLoading = false;  
      }
    );
  }
}
