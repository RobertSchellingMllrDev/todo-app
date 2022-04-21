import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { MainSiteComponent } from './main-site.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CategoryListComponent } from './category-list/category-list.component';
import { CheckBoxComponent } from './todo-item/check-box/check-box.component';

@NgModule({
  declarations: [
    CategoryComponent,
    MainSiteComponent,
    TodoListComponent,
    NavigationComponent,
    TodoItemComponent,
    CategoryListComponent,
    CheckBoxComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    DragDropModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class MainSiteModule {   
  
  constructor() { }

  ngOnInit(): void {
  }
}
