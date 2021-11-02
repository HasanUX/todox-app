// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Todo from './todo';
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
        taskName: "Pray fozor solat at 5:20PM",
        taskTag: "Call every family member"
      },

      {
        id: 2,
        taskName: "Recite Quran 1 page at 6:00PM",
        taskTag: "Read loudly"
      },

      {
        id: 3,
        taskName: "Take breakfast with family",
        taskTag: "Dont too much"
      }
    ]
  };


  // delete/increment item method 
  deleteHandler = (todo) => {
    // if(this.fish === undefined) {return} //catcher to handle error
    const todoList = this.state.todos.filter(t => t.id !== todo);
    this.setState({ todoList });
    console.log(todo);
    
  };
  
  render() { 
    return (
      <div className="App container">
        <div className="row">
          <div className="col-6 offset-3 text-center">
              <h1 className="app-title mt-5 mb-5"> Todox - <span className="text-primary"> speed up your task </span></h1>
              <Todo 
              todos={this.state.todos}
              onDelete={this.deleteHandler}/>
          </div>
        </div>
        
        
        
       
    </div>
    );
  }
}
 
export default App;
