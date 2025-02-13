import { Todo } from "./todo";

export class App{
  constructor(){
    this.todoList = [];
    this.todoList.push(new Todo("Clean my room"));
    this.todoList.push(new Todo("Drink Water"));
    this.todoList.push(new Todo("Eat"));
    this.todoList.push(new Todo("Dance"));
    this.todoList.push(new Todo("Sleep"));
    this.newItem = "";
  }

  addTodo(){
    this.todoList.push(new Todo(this.newItem))
    this.newItem = "";
  }

  removeTodo(todo){
    this.todoList.splice(this.todoList.indexOf(todo),1)
  }
}
