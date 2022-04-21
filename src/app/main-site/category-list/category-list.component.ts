import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Category } from 'src/app/core/interface/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'], 
})
export class CategoryListComponent implements OnInit {
  @Output() onCategoryChange = new EventEmitter<any> ()

  categories: Category[] = []

  selectedCategory?: Category

  
  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.onCategoryChange.emit(category)
  }
addCategory(name: string) {
    this.categories.push({
      name: name,
      isFinished: false,
      tasks: []
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
