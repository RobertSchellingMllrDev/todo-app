import { Component, Input, OnInit, Output } from '@angular/core';
import { Category, Task } from '@app/interfaces';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() category?: Category
  @Output() isCompleted = new EventEmitter<any> ();

  checkComplete(): void {
    let isCompleted = false

    if(this.category) {
      for (let i = 0; i < this.category.tasks.length; i++) {

        if(!this.category.tasks[i].isFinished){
          isCompleted = false;
          break;
        }

        else {
          isCompleted = true;
        }

      }
    }
    this.isCompleted.emit(isCompleted);
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  addTodo(description: string) {
    if(this.category){
      
      if(!this.category.tasks) {
        this.category.tasks = []
      } 

      this.category.tasks.push({
        isFinished: false,
        description: description
      })
    }

    this.checkComplete();
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.category){
       moveItemInArray(this.category.tasks, event.previousIndex, event.currentIndex);
    }

  }

  deleteItem(task: Task){
    if(this.category){
      this.category.tasks.splice(this.category.tasks?.indexOf(task), 1)  
    }

  }
}
