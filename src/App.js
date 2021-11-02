// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Todo from './todo';
import AddTodo from './addTodo';
import './App.css';


//create class comp
//declare state in a array within a property
//create todo.js comp 
//add <Todo /> in parent comp - app.js
//add props
//declare props in todo.js

export class App extends Component {

  state = {
    todos:[
      {
        id: 1,
        taskName: "Pray fajr prayer at mosque (5:20AM)"
      },

      {
        id: 2,
        taskName: "Recite Quran at least one page (5:45AM)"
      },

      {
        id: 3,
        taskName: "Take breakfast"
      }
    ]
  };


  // delete/increment item method 
  deleteTodo = id => {
    // if(this.fish === undefined) {return} //catcher to handle error
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({ todos });
    
  };


  // AddTodo function to add task to the state prop array - todos

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }
  
  render() { 
    return (
      <div className="App container">
        <div className="row">
          <div className="col-6 offset-3">
              <h1 className="app-title mt-5 mb-5 text-white"> Todox - <span className="text-primary"> speed up your task </span></h1>
              <Todo 
              todos={this.state.todos}
              onDelete={this.deleteTodo}/>

              <AddTodo addTodo={this.addTodo}/>
          </div>
        </div>
        
        
        
       
    </div>
    );
  }
}
 
export default App;
