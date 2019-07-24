import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list module';

  newTodo: string;
  todos: any;
  todoObj: any;
  // selectedAll: boolean;

  // names: any;
  selectedAll: any;
  selectedNames: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
    // this.selectedAll = false;

    // this.names = [
    //   { name: 'Prashobh', selected: false },
    //   { name: 'Abraham', selected: false },
    //   { name: 'Anil', selected: false },
    //   { name: 'Sam', selected: false },
    //   { name: 'Natasha', selected: false },
    //   { name: 'Marry', selected: false },
    //   { name: 'Zian', selected: false },
    //   { name: 'karan', selected: false },
    // ]
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
    console.log(this.todos)
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  // selectedAll() {
  //   this.selectAll = this.todos.every(function(item:any) {
  //       return item.selected == true;
  //   })

  //   for (var i = 0; i < this.todos.length; i++) {
  //     this.todos[i].isSelected = this.selectAll;
  //   }
  //   this.todos;

  //   console.log(this.todos)
  // }

  // getCheckedItemList() {
  //   this.checkedList = [];
  //   for (var i = 0; i < this.todos.length; i++) {
  //     if(this.todos[i].isSelected)
  //     this.checkedList.push(this.todos[i]);
  //   }
  //   this.checkedList = JSON.stringify(this.checkedList);
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  selectAll() {
    this.selectedAll = !this.selectedAll;

    for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].selected = this.selectedAll;
    } 
  }
  checkIfAllSelected() {
    var totalSelected =  0;
    for (var i = 0; i < this.todos.length; i++) {
          if(this.todos[i].selected) totalSelected++;
      } 
    this.selectedAll = totalSelected === this.todos.length;

    return true;
  }
}

