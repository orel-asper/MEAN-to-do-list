import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  myForm: FormGroup;
  todos: Todo


  constructor(
    private apiService: ApiService,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.apiService.getAllToDo()
      .subscribe((res: any) => this.todos = res), err => console.log(err)
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  insertToDo() {
    this.apiService.createToDo(this.myForm.value)
    .subscribe(res => this.ngOnInit()), err => console.log(err)
  }

  Delete(id: string) {
    this.apiService.deleteToDo(id)
    .subscribe(res => this.ngOnInit(), err => console.log(err))
  }

}
