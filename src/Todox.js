import React from 'react';
import Todo from './Todo';
import Done from './Done';
import AddTodo from './AddTodo';
import DeleteAll from './DeleteAll';


class Todox extends React.Component {

    state = {
        todos:[
          {
            id: 1,
            taskName: "Pray fajr prayer at mosque (5:20AM)",
            done: true
          },
    
          {
            id: 2,
            taskName: "Recite Quran at least one page (5:45AM)",
            done: ""
          },
    
          {
            id: 3,
            taskName: "Take breakfast",
            done: ""
          }
        ]
      };
    
    
      // delete/increment item method 
      deleteTodo = id => {
        // if(this.fish === undefined) {return} //catcher to handle error
        const todos = this.state.todos.filter(todo => todo.id !== id);
    
        this.setState({ todos });
        
      };
    
      //delete all objects of array method
      deleteAllTodo = () => {
        // eslint-disable-next-line no-unused-vars
        const {todos} =  this.state.todos;
        this.setState({ todos: []});
      };
    
    
      // AddTodo function to add task to the state prop array - todos
    
      addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({todos});
      }


      // task-done func - toggle checkbox
      handleDone = todo => {
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index] = {...todos[index]};
        todos[index].done = !todos[index].done;
        this.setState({ todos });
      }

      

    render() { 
        console.log("Todox rendered");
        const { todos } = this.state;
       

        return (
            <div className="App container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <h1 className="app-title mt-5 mb-5 text-white"> Todox - <span className="text-primary"> track your task <span className="text-secondary"> v.1 </span> </span></h1>
                        <Todo 
                        todos={todos}
                        onDelete={this.deleteTodo}
                        handleDone={this.handleDone}
                        />

                        {todos.length > 0 && 
                        <DeleteAll onDeleteAll={this.deleteAllTodo} todos={todos}/>
                        }
                
                        <AddTodo addTodo={this.addTodo}/>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Todox;
