import { Component, OnInit } from '@angular/core';
import { Category } from '@app/interfaces'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  selectedCategory?: Category
  
  onCategoryChange(category: Category):void {
    this.selectedCategory = category
  }
  onTodoCompleted(isCompleted: boolean):void {
      if(this.selectedCategory){
      this.selectedCategory.isFinished = isCompleted
    }
    console.log(this.selectedCategory)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
