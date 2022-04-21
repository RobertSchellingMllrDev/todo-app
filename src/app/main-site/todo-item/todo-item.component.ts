import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '@app/interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task?: Task;
  @Output() onListChange = new EventEmitter<any>();
  @Output() deletedItem = new EventEmitter<any>();
  
  isEdit = false

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(isFinished: boolean ){
    if(this.task != null) {
      this.task.isFinished = isFinished ;
    }
    this.onListChange.emit();
  }

  deleteItem() {
    this.deletedItem.emit(this.task);
    this.onListChange.emit();
  }

  enterEditMode(isEdit: boolean) {
    this.isEdit = isEdit
  }

  updateItem(description: string) {
    if(this.task){
        this.task.description = description;
    }
    this.isEdit = false
  }
}
