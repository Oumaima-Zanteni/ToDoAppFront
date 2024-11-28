import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  task: Task = {
    title: '',
    description: '',
    priority: 1,
    due_date: '',
    is_completed: false,
    user_id: 1  
  };

  constructor(private taskService: TaskService, private router: Router) { }

  onSubmit() {
    this.taskService.addTask(this.task).subscribe(
      (response) => {
        console.log('Task added successfully:', response);
        this.router.navigate(['/']);  
      },
      (error) => {
        console.error('Error adding task:', error);
      }
    );
  }
}
