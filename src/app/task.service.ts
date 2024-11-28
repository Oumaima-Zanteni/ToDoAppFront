import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définir l'interface pour Task
export interface Task {
  title: string;
  description: string;
  priority: number;
  due_date: string;
  is_completed: boolean;
  user_id: number; 
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8000/api/tasks';  

  constructor(private http: HttpClient) { }
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  editTask(id: string, updatedTask: any): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, updatedTask);
  }
  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${id}`);
  }
}
