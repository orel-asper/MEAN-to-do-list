import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000/'
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }

  createToDo(body: Todo) {
    let url = `${this.baseUrl}post`
    return this.http.post(url, body)
  }

  getAllToDo() {
    return this.http.get(this.baseUrl)
  }

  deleteToDo(id: string) {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { headers: this.headers })
  }

}
